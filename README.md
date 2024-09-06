
# Website Monitor Application-Backend


Developed using express & mongodb


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
| `url ` | `string` | **Required**.required and should be a valid URL. |
| `status  ` | `string` | **Required**. optional (default is "unknown"). |
| `lastChecked  ` | `string` | **Required**. optional (default is the current date). |

