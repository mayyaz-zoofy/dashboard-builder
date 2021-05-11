function getData() {
  return {
    "id": 1,
    "theme": {
      "palette": {
        "primary": {
          "main": "#1976d2"
        },
        "secondary": {
          "main": "#dc004e"
        },
        "error": {
          "main": "#f44336"
        },
        "warning": {
          "main": "#ff9800"
        },
        "info": {
          "main": "#2196f3"
        },
        "success": {
          "main": "#4caf50"
        },
      }
    },
    "content": {
      "header": {
        "title": "Repair Desk",
        "logo": "https://uilogos.co/img/logotype/circle.png",
        "leftNav": {
          "display": true,
          "items": [
            {
              "label": "Repair",
              "children": [
                {
                  "label": "Electric",
                  "url": "http://google.com/"
                },
                {
                  "label": "Point of Sale",
                  "url": "http://google.com/"
                },
                {
                  "label": "Reports",
                  "url": "http://google.com/"
                }
              ]
            }
          ]
        },
        "rightNav": {
          "display": true,
          "items": {
            "apps": {
              "display": true,
              "tooltip": "Show All Apps",
              "items": [
                {
                  "icon": "comment",
                  "link": "http://google.com/",
                  "newTab": true
                },
                {
                  "icon": "event",
                  "link": "http://google.com/",
                  "newTab": false
                },
                {
                  "icon": "perm_media",
                  "link": "http://google.com/",
                  "newTab": true
                },
                {
                  "icon": "settings",
                  "link": "http://google.com/",
                  "newTab": true
                }
              ]
            },
            "notifications": {
              "display": true,
              "endpoint": "http://google.com/"
            },
            "profile": {
              "display": true
            }
          }
        }
      },
      "footer": {
        "title": "@Copyrights. All rights reserved.",
        "links": [
          {
            "tooltip": "Visit facebook page",
            "icon": "https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png",
            "link": "https://www.facebook.com",
            "newTab": true
          },
          {
            "tooltip": "Visit twitter handle",
            "icon": "https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png",
            "link": "https://www.twitter.com",
            "newTab": true
          }
        ]
      },
      "body": [
          {
            "type": "div",
            "width": "1",
            "isCard": true,
            "children": [
              {
                "type": "html",
                "content": "<h1 class='text-2xl my-4'>Welcome, Tim Collins!</h1>"
              }
            ]
          },
          {
            "type": "div",
            "width": "2/3",
            "className": "flex flex-wrap",
            "children": [
              {
                "type": "div",
                "width": "1/4",
                "className": "p-3",
                "children": [
                  {
                    "type": "stat",
                    "title": "Repairs",
                    "subtitle": "(10)",
                    "content": "$7645.89",
                    "bottom": {
                      "left": "$25",
                      "right": "($5000)"
                    }
                  }
                ]
              },
              {
                "type": "div",
                "width": "1/4",
                "className": "p-3",
                "children": [
                  {
                    "type": "stat",
                    "width": "1/2",
                    "title": "Network Unlocks",
                    "subtitle": "(10)",
                    "content": "$7645.89",
                    "bottom": {
                      "left": "$25",
                      "right": "($5000)"
                    }
                  }
                ]
              },
              {
                "type": "div",
                "width": "1/4",
                "className": "p-3",
                "children": [
                  {
                    "type": "stat",
                    "width": "1/2",
                    "title": "Accessories & Parts",
                    "subtitle": "(10)",
                    "content": "$7645.89",
                    "bottom": {
                      "left": "$25",
                      "right": "($5000)"
                    }
                  }
                ]
              },
              {
                "type": "div",
                "width": "1/4",
                "className": "p-3",
                "children": [
                  {
                    "type": "stat",
                    "width": "1/2",
                    "title": "Trade In",
                    "subtitle": "(10)",
                    "content": "$7645.89",
                    "bottom": {
                      "left": "$25",
                      "right": "($5000)"
                    }
                  }
                ]
              },
              {
                "type": "div",
                "isCard": true,
                "title": "SALES VS COGS",
                "width": "1",
                "children": [
                  {
                    "type": "gLine",
                    "endpoint": "/line-chart",
                    "priority": 4,
                    "viewAll": {
                      "label": "View All",
                      "link": "http://google.com/",
                      "newTab": true
                    },
                    "filters": [
                      {
                        "type": "date",
                        "label": "Create At",
                        "slug": "created_at"
                      },
                      {
                        "type": "pills",
                        "slug": "period",
                        "position": "right",
                        "defaultValue": "week",
                        "options": [
                          {
                            "label": "Last week",
                            "value": "week"
                          },
                          {
                            "label": "Last two weeks",
                            "value": "fortnight"
                          },
                          {
                            "label": "Last month",
                            "value": "month"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "div",
                "isCard": true,
                "title": "SALES VS COGS",
                "width": "1",
                "children": [
                  {
                    "type": "table",
                    "endpoint": "/table-data",
                    "priority": 2,
                    "viewAll": {
                      "label": "View All",
                      "link": "http://google.com/",
                      "newTab": true
                    },
                    "filters": [
                      {
                        "type": "pills",
                        "slug": "period",
                        "position": "right",
                        "defaultValue": "today",
                        "options": [
                          {
                            "label": "Today",
                            "value": "today"
                          },
                          {
                            "label": "This Month",
                            "value": "month"
                          },
                          {
                            "label": "Last Month",
                            "value": "month-1"
                          }
                        ]
                      }
                    ],
                    "columns": [
                      {
                        "label": "Ticket #",
                        "key": "id",
                        "type": "link"
                      },
                      {
                        "label": "Task",
                        "key": "task",
                        "type": "link"
                      },
                      {
                        "label": "Pick up time",
                        "key": "pick_up_time"
                      },
                      {
                        "label": "Assigned To",
                        "key": "assigned_to"
                      },
                      {
                        "label": "Customer",
                        "key": "customer"
                      },
                      {
                        "label": "Status",
                        "key": "status",
                        "type": "badge"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "div",
            "width": "1/3",
            "children": [
              {
                "type": "div",
                "width": "1",
                "isCard": true,
                "className": "px-10",
                "children": [
                  {
                    "type": "div",
                    "width": "1/3",
                    "children": [
                      {
                        "type": "image",
                        "url": "https://thumbs.dreamstime.com/b/stock-exchange-accounting-financial-chart-initial-letter-n-logo-design-template-editable-vector-eps-financial-chart-187612254.jpg"
                      }
                    ]
                  },
                  {
                    "type": "pLinear",
                    "label": "Store Profile",
                    "endpoint": "/linear-progress",
                    "priority": 5,
                  },
                  {
                    "type": "link",
                    "label": "Complete you profile",
                    "url": "http://google.com/",
                    "className": "my-3"
                  }
                ]
              },
              {
                "type": "div",
                "width": "1",
                "isCard": true,
                "title": "HOW DO YOU HEAR ABOUT US?",
                "children": [
                  {
                    "type": "gPie",
                    "title": "STORE: BAD APPLE ORM",
                    "subtitle": "6 August 2018",
                    "endpoint": "/pie-chart",
                    "priority": 3,
                    "viewAll": {
                      "label": "View All",
                      "link": "http://google.com/",
                      "newTab": true
                    },
                    "filters": [
                      {
                        "type": "pills",
                        "slug": "period",
                        "legends": true,
                        "defaultValue": "week",
                        "options": [
                          {
                            "label": "Last week",
                            "value": "week"
                          },
                          {
                            "label": "Last two weeks",
                            "value": "fortnight"
                          },
                          {
                            "label": "Last month",
                            "value": "month"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "div",
                "width": "1",
                "isCard": true,
                "title": "SALES TARGET",
                "children": [
                  {
                    "type": "pCircular",
                    "title": "STORE: BAD APPLE ORM",
                    "subtitle": "6 August 2018",
                    "endpoint": "/circular-progress",
                    "priority": 6,
                    "viewAll": {
                      "label": "View All",
                      "link": "http://google.com/",
                      "newTab": true
                    },
                    "filters": [
                      {
                        "type": "pills",
                        "slug": "period",
                        "legends": true,
                        "defaultValue": "week",
                        "options": [
                          {
                            "label": "Last week",
                            "value": "week"
                          },
                          {
                            "label": "Last two weeks",
                            "value": "fortnight"
                          },
                          {
                            "label": "Last month",
                            "value": "month"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
          "type": "div",
          "width": "1",
          "isCard": true,
          "title": "VIEWS PER PAGE",
          "children": [
            {
              "type": "gBar",
              "title": "STORE: BAD APPLE ORM",
              "subtitle": "6 August 2018",
              "endpoint": "/bar-chart",
              "priority": 7,
              "viewAll": {
                "label": "View All",
                "link": "http://google.com/",
                "newTab": true
              },
              "filters": [
                {
                  "type": "pills",
                  "slug": "period",
                  "legends": true,
                  "defaultValue": "week",
                  "options": [
                    {
                      "label": "Last week",
                      "value": "week"
                    },
                    {
                      "label": "Last two weeks",
                      "value": "fortnight"
                    },
                    {
                      "label": "Last month",
                      "value": "month"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  }
}

export default getData();
