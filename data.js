var APP_DATA = {
  "scenes": [
    {
      "id": "0-360clothin2",
      "name": "360clothin2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "yaw": 1.2024028590783082,
        "pitch": 0.08692224749434097,
        "fov": 1.405674899209756
      },
      "linkHotspots": [
        {
          "yaw": 0.8101677543414105,
          "pitch": 0.3024330129108197,
          "rotation": 6.283185307179586,
          "target": "1-360clothin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-360clothin",
      "name": "360clothin",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "yaw": 1.1523437179741123,
        "pitch": 0.2755161184960073,
        "fov": 1.405674899209756
      },
      "linkHotspots": [
        {
          "yaw": 3.0839672921282606,
          "pitch": 0.6243805952697272,
          "rotation": 0,
          "target": "0-360clothin2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.0745534914826678,
          "pitch": 0.1504904544480059,
          "title": "Formal suit jacket",
          "text": "Industry of the highest quality.<div>The price is 100$</div>"
        },
        {
          "yaw": 0.7532273584396609,
          "pitch": 0.29053372371162567,
          "title": "suit tie",
          "text": "New Collection"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
