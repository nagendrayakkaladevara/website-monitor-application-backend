
# Website Monitor Application-Backend

The Website Monitor Backend is designed to track the uptime and performance of websites. It is built using Express.js for the backend and MongoDB for data storage. The system continuously monitors websites, storing status history, response times, and uptime details in the database.

## Features

- Real-Time Monitoring: Periodically checks the status of websites (online/offline) and logs response times.
- Data Storage with MongoDB: Keeps a history of website status and response time for a specified period (e.g., last 10 days).
- Alert System: Notifies the user when a website goes down or recovers.
- Error Handling: Integrated robust error handling for smoother operations.
- Authentication: Secured access for managing websites and monitoring data.
- RESTful API: Provides endpoints to manage websites, view monitoring logs, and retrieve historical data.


## API Reference

#### Get all items

```http
  GET /users/newWebsitelink
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /users/history/:websiteId
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `websiteIdid`| `string` | **Required**. Id of item to fetch |

#### Post item

```http
  POST /users/newWebsitelink
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `url` | `string` | **Required**.required and should be a valid URL. |
| `status` | `string` | **Required**. optional (default is "unknown"). |
| `lastChecked` | `string` | **Required**. optional (default is the current date). |

