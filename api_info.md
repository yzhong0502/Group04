|           |                                                              |
| --------- | ------------------------------------------------------------ |
|           |                                                              |
|           |                                                              |
| Register  |                                                              |
|           |                                                              |
|           | POST http://localhost:3000/api/auth/register                 |
|           | Body { "name" : "username", "email" : "email@example.com", "password" : "12345678" } |
|           |                                                              |
|           | Response success { "status": "success", "message":"Successfully registered", "data": { "_id": "sJgiedTGRbW7pyJB","name":"Jay", "email": "exampsle2@dasds.dsd", "token":"whatever token"} } |
|           |                                                              |
|           | Response fail { "status": "error", "message":"error message"} |
|           |                                                              |
| Login     |                                                              |
|           |                                                              |
|           | POST http://localhost:3000/api/auth/login                    |
|           | Body { "email" : "email@example.com", "password" : "12345678" } |
|           |                                                              |
|           | Response success { "status": "success", "message":"Successfully registered", "data": { "_id": "sJgiedTGRbW7pyJB","name":"Jay", "email": "exampsle2@dasds.dsd", "token":"whatever token"} } |
|           |                                                              |
|           | Response fail { "status": "error", "message":"error message"} |
|           |                                                              |
|           |                                                              |
|           |                                                              |
|           |                                                              |
| Add news  |                                                              |
|           |                                                              |
|           | POST http://localhost:3000/api/news/addNews                  |
|           | Header {"authorization" :"token"}                            |
|           | Body {'title':'ada', 'description':'aowefjf', 'url':'http://adfaf d',  imageUrl':'...', 'publishedAt':'...'} |
|           |                                                              |
|           | Response success { "status": "success", "message":"Successfully added news", "data": { "_id": "sJgiedTGRbW7pyJB",'title':'ada', 'description':'aowefjf', 'url':'http://adfaf d',  imageUrl':'...', 'publishedAt':'...'} } |
|           |                                                              |
|           | Response fail { "status": "error", "message":"error message"} |
|           |                                                              |
| List news |                                                              |
|           |                                                              |
|           | Get http://localhost:3000/api/news/getNews                   |
|           |                                                              |
|           | Response success { "status": "success", "message":"Successfully get news", "data": [{ "_id": "sJgiedTGRbW7pyJB",'title':'ada', 'description':'aowefjf', 'url':'http://adfaf d',  imageUrl':'...', 'publishedAt':'...'},..........] } |
|           |                                                              |
|           | Response fail { "status": "error", "message":"error message"} |
|           |                                                              |
|           |                                                              |
| Edit news |                                                              |
|           |                                                              |
|           | Put http://localhost:3000/api/news/editNews                  |
|           | Header {"authorization" :"token"}                            |
|           | Body {"_id": "sJgiedTGRbW7pyJB", 'title':'ada', 'description':'aowefjf', 'url':'http://adfaf d',  imageUrl':'...', 'publishedAt':'...'} |
|           |                                                              |
|           | Response success { "status": "success", "message":"Successfully edited news", "data": { "_id": "sJgiedTGRbW7pyJB",'title':'ada', 'description':'aowefjf', 'url':'http://adfaf d',  imageUrl':'...', 'publishedAt':'...'} } |
|           |                                                              |
|           | Response fail { "status": "error", "message":"error message"} |
|           |                                                              |



| Delete news |
| ----------- | ------------------------------------------------------------ |
|             |                                                              |
|             | Delete http://localhost:3000/api/news/deleteNews             |
|             | Header {"authorization" :"sometoken"}                        |
|             | Body {"_id": "sJgiedTGRbW7pyJ"}                              |
|             |                                                              |
|             | Response success { "status": "success", "message":"Successfully deleted news"} |
|             |                                                              |
|             | Response fail { "status": "error", "message":"Fail to delete news"} |

| Send query |                                                              |
| ---------- | ------------------------------------------------------------ |
|            |                                                              |
|            | POST http://localhost:3000/api/query/send                    |
|            | Body { "email" : "email@example.com", "query" : "whatever content" } |
|            |                                                              |
|            | Response success { "status": "success", "message":"Successfully sent query", "data": { "_id": "sJgiedTGRbW7pyJB","email": "exampsle2@dasds.dsd", "query":"whatever content"} } |
|            |                                                              |
|            | Response fail { "status": "error", "message":"Fail to send query"} |