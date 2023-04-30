const sql = require('../config/db.connection');
const jwt = require('jsonwebtoken')
require('dotenv').config();

const createCompetition = async (req, res) => {
    
    const { title, type, workout_name, rules, reward } = req.body

    const token = req.header('Authorization')
    if(!token){
        return res.status(401).json({
            status: 401,
            message: 'Unauthorized'
        })
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_TOKEN);
        const user_id = decoded.userId
         

        const checkCompetition ='SELECT COUNT(*) AS count FROM competition WHERE created_by_user_id = ?'
        await sql.query(checkCompetition, user_id, async(err, result) => {
            if(err){
                return res.status(500).json({
                    status:500,
                    message: err
                })
            }

            if (result[0].count > 0) {
                return res.status(400).json({
                    status:400,
                    message: 'Only one competition at time'
                })
            }

            const createCompetitionQuery = 'INSERT INTO competition SET ?'
            const competationParams = { title, type, workout_name, rules, created_by_user_id: user_id, status: 'to be started', reward }
            await sql.query(createCompetitionQuery, competationParams, (err, result) => {
                if(err){
                    return res.status(500).json({
                        status:500,
                        message: err
                    })
                }
                res.status(201).json({
                    status:201,
                    message: 'Challenge created',
                    competition_id: result.insertId
                })
            })
        })
    }catch(err){
        res.status(500).json({
            status: 500,
            message: err
        })
    }
}

const deleteCompetiton = async (req, res) => {
    const { id } = req.body

    const token = req.header('Authorization')
    if(!token){
        return res.status(401).json({
            status: 401,
            message: 'Unauthorized'
        })
    }

    try{
        const deleteQuery ='DELETE FROM competition WHERE id = ?'
        await sql.query(deleteQuery, [id], async(err, result) => {
            if(err){
                return res.status(500).json({
                    status:500,
                    message: err
                })
            }
            res.status(201).json({
                status:201,
                message: 'Challenge deleted',
            })
        })
    }catch(err){
        res.status(500).json({
            status: 500,
            message: err
        })
    }
}

const sendInvition = async (req, res) => {
    const { competition_id, recipient_id } = req.body;
  
    const token = req.header('Authorization');
    if (!token) {
      return res.status(401).json({
        status: 401,
        message: 'Unauthorized'
      });
    }
  
    try {
        const decoded = jwt.verify(token, process.env.JWT_TOKEN);
        const user_id = decoded.userId;
  
  
        // const checkInvitationQuery = 'SELECT * FROM invitation WHERE competition_id = ? AND sender_id = ? AND recipient_id = ? AND status = "pending"';
        // const checkInvitationParams = [competition_id, user_id, recipient_id];
        // const [rows] = await sql.query(checkInvitationQuery, checkInvitationParams);

        // if (rows.length > 0) {
        // return res.status(400).json({
        //     status: 400,
        //     message: 'Invitation already sent to the recipient'
        // });
        // }
        
    
        // const checkInvitationQuery = 'SELECT * FROM invitation WHERE competition_id = ? AND sender_id = ? AND recipient_id = ? AND status = "pending"';
        // const checkInvitationParams = [competition_id, user_id, recipient_id];
        // const [rows] = await sql.query(checkInvitationQuery, checkInvitationParams);

        // if (rows.length > 0) {
        // return res.status(400).json({
        //     status: 400,
        //     message: 'Invitation already sent to the recipient'
        // });
        // }
        
        const checkQuery = 'SELECT * FROM invitation WHERE competition_id = ? AND recipient_id = ?'
        const checkParams = [competition_id, recipient_id]
        await sql.query(checkQuery, checkParams,async (err, result) => {
            if(err){
                return res.status(500).json({
                    status:500,
                    message: err
                })
            }

            if(result.length > 0){
                return res.status(400).json({
                    status:400,
                    message: "This user has been invitated"
                })
            }
            const sendInvitationQuery = 'INSERT INTO invitation SET ?';
            const sendInvitationParams = { competition_id, sender_id: user_id, recipient_id, status: 'pending' };
            await sql.query(sendInvitationQuery, sendInvitationParams);
    
            res.status(201).json({
            status: 201,
            message: 'Invitation Sent'
            });
        })
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err.message
      });
    }
};

const showAllInvitations = async (req, res) => {
    const token = req.header('Authorization')
    if(!token){
        return res.status(401).json({
            status: 401,
            message: 'Unauthorized'
        })
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_TOKEN);
        const user_id = decoded.userId

        const showAllInvitationQuery = 'SELECT c.id AS competition_id, c.title, c.type, c.workout_name, c.rules, c.reward, u.nickname AS creator_username, i.status FROM competition c JOIN users u ON c.created_by_user_id = u.id JOIN invitation i ON c.id = i.competition_id WHERE i.recipient_id = ?'
        await sql.query(showAllInvitationQuery, user_id, (err, result) => {
            if(err){
                return res.status(500).json({
                    status:500,
                    message: err
                })
            }
            if(Object.keys(result).length === 0){
                return res.status(401).json({
                    status: 401,
                    message: 'Invitation Inbox empty'
                })
            }
            res.status(201).json({
                status: 201,
                message: result
            })
        })

    }catch(err){
        res.status(500).json({
            status:500,
            message: err
        })
    }
}

const changeStatusInvitation = async (req, res) => {
    const { competition_id, status } = req.body;
  
    const token = req.header("Authorization");
    if (!token) {
      return res.status(401).json({
        status: 401,
        message: "Unauthorized",
      });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_TOKEN);
      const user_id = decoded.userId;
  
      if (status === "declined") {
        const deleteQuery = "DELETE FROM invitation WHERE competition_id = ? AND recipient_id = ?";
        await sql.query(deleteQuery, [competition_id, user_id], (err) => {
          if (err) {
            return res.status(500).json({
              status: 500,
              message: err,
            });
          }
  
          res.status(201).json({
            status: 201,
            message: "Invitation declined",
          });
        });
      } else if (status === "accepted") {
        const checkInvitationsQuery = "SELECT COUNT(*) AS count FROM invitation WHERE competition_id = ? AND status = 'accepted'";
        await sql.query(checkInvitationsQuery, [competition_id], async (err, result) => {
          if (err) {
            return res.status(500).json({
              status: 500,
              message: err,
            });
          }
  
          const count = result[0].count;
  
          const updateInvitationQuery = "UPDATE invitation SET status = ? WHERE competition_id = ? AND recipient_id = ?";
          await sql.query(updateInvitationQuery, [status, competition_id, user_id], async (err) => {
            if (err) {
              return res.status(500).json({
                status: 500,
                message: err,
              });
            }
  
            if (count === 1) { // If all users accepted, start the competition
              const startCompetitionQuery = "UPDATE competition SET status = 'started' WHERE id = ?";
              await sql.query(startCompetitionQuery, [competition_id], async (err) => {
                if (err) {
                  return res.status(500).json({
                    status: 500,
                    message: err,
                  });
                }
  
                res.status(201).json({
                  status: 201,
                  message: competition_id,
                });
              });
            } else {
              res.status(201).json({
                status: 201,
                message: "Invitation accepted",
              });
            }
          });
        });
      }
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: err,
      });
    }
  };
  
const ownerCompetition = async(req, res) => {
    const token = req.header('Authorization')
    if(!token){
        return res.status(401).json({
            status: 401,
            message: 'Unauthorized'
        })
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_TOKEN);
        const user_id = decoded.userId

        const showcompetitionOwn = 'SELECT * FROM competition WHERE created_by_user_id = ?'
        await sql.query(showcompetitionOwn, user_id, (err, result) => {
            if(err){
                return res.status(500).json({
                    status:500,
                    message: err
                })
            }
            res.status(201).json({
                status: 201,
                message: result
            })
        })

    }catch(err){
        res.status(500).json({
            status:500,
            message: err
        })
    }
}

const performing_competition = async(req, res) => {
    const { competition_id, duration_user } = req.body 

    const token = req.header('Authorization')
    if(!token){
        return res.status(401).json({
            status: 401,
            message: 'Unauthorized'
        })
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_TOKEN);
        const user_id = decoded.userId

        let challenge_duration
        const competationDurationQuery = 'SELECT duration FROM competition WHERE id = ?'
        await sql.query(competationDurationQuery, competition_id, async(err, result) => {
            if(err){
                return res.status(500).json({
                    status: 500,
                    message: err
                })
            }

            challenge_duration = result[0].duration
            if(duration_user > challenge_duration){
                const deleteQuery = 'DELETE FROM invitation WHERE competition_id = ? AND recipient_id = ?'
                await sql.query(deleteQuery, [ competition_id, user_id ], (err) => {
                    if(err){
                        return res.status(500).json({
                            status: 500,
                            message: err
                        })
                    }
                })
                res.status(201).json({
                    status: 10,
                    message: 'You exceed the duration of the challenge. You lost'
                })
            }

            const competitionFinished = 'INSERT INTO user_competition_participation SET ?'
            const params = { challenge_id: competition_id, user_id, duration_user }
            await sql.query(competitionFinished, params, (err) => {
                if(err){
                    return res.status(500).json({
                        status: 500,
                        message: err
                    })
                }

                res.status(201).json({
                    status: 20,
                    message: {
                        message: 'You finished on time!',
                        results: params
                    }
                })
            })
            
        })
    }catch(err){
        res.status(500).json({
            status: 500,
            message: err
        })
    }
}

const getWinner = async(req, res) => {
    const { challenge_id } = req.body
    try{
        const getWinnerQuery = 'SELECT user_id, duration_user FROM user_competition_participation WHERE challenge_id = ? ORDER BY duration_user ASC'
        await sql.query(getWinnerQuery, challenge_id, async(err, result) => {
            if(err){
                return res.status(500).json({
                    status: 500,
                    message: err
                })
            }

            const winner = result[0]

            const updateCompetition = 'UPDATE competition SET winner_user_id = ?, status = ? WHERE id = ?'
            await sql.query(updateCompetition, [winner.user_id, 'done', challenge_id], (err) => {
                if(err){
                    return res.status(500).json({
                        status: 500,
                        message: err
                    })
                }
                res.status(201).json({
                    status: 201,
                    message: 'Congratulations',
                    results: winner
                })
            })  
        })
    }catch(err){
        res.status(500).json({
            status: 500,
            message: err
        })
    }
}

const challengeDetails = async(req, res) => {
    const {challenge_id} = req.body
    try{
        const query = 'SELECT title, type, workout_name, reward, rules, created_by_user_id FROM competition WHERE id = ?'
        await sql.query(query, challenge_id, (err, result) => {
            if(err){
                return res.status(500).json({
                    status: 500,
                    message: err
                })
            }

            const challenge = result[0]
            const userQuery = 'SELECT full_name, nickname FROM users WHERE id = ?'
            sql.query(userQuery, challenge.created_by_user_id, (err, result) => {
                if(err){
                    return res.status(500).json({
                        status: 500,
                        message: err
                    })
                }
                const response = {
                    title: challenge.title,
                    type: challenge.type,
                    workout_name : challenge.workout_name,
                    rules: challenge.rules,
                    fullName: result[0].full_name,
                    nickName: result[0].nickname,
                    reward: challenge.reward
                }
                return res.status(201).json({
                    status: 201,
                    message: response
                })
            })

        })

    }catch(err){
        res.status(500).json({
            status: 500,
            message: err
        })
    }
}

module.exports = { 
    createCompetition, 
    sendInvition, 
    showAllInvitations, 
    changeStatusInvitation, 
    performing_competition, 
    getWinner, 
    challengeDetails, 
    deleteCompetiton,
    ownerCompetition
}