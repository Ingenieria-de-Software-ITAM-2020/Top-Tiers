jQuery("#simulation")
  .on("click", ".s-a50d7f62-4c53-42bc-96dd-714d90079d6c .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Paragraph_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/2c6f99af-da5c-494d-8a8b-fdaf06f68655"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/2898925c-2059-474a-b9ef-f376b9a53c6f"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_24")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-a50d7f62-4c53-42bc-96dd-714d90079d6c #s-Paragraph_24": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-a50d7f62-4c53-42bc-96dd-714d90079d6c #s-Paragraph_24 > .borderLayer": {
                      "attributes": {
                        "border-top-color": "#80B8F1",
                        "border-right-color": "#80B8F1",
                        "border-bottom-color": "#80B8F1",
                        "border-left-color": "#80B8F1"
                      }
                    }
                  },{
                    "#s-a50d7f62-4c53-42bc-96dd-714d90079d6c #s-Paragraph_24 span": {
                      "attributes": {
                        "color": "#80B8F1"
                      }
                    }
                  },{
                    "#s-a50d7f62-4c53-42bc-96dd-714d90079d6c #s-Paragraph_24 > .borderLayer": {
                      "attributes-ie": {
                        "border-top-color": "#80B8F1",
                        "border-right-color": "#80B8F1",
                        "border-bottom-color": "#80B8F1",
                        "border-left-color": "#80B8F1"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-a50d7f62-4c53-42bc-96dd-714d90079d6c #s-Paragraph_24": {
                      "attributes": {
                        "font-size": "0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-a50d7f62-4c53-42bc-96dd-714d90079d6c #s-Paragraph_24 > .borderLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#F9F8FC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#F9F8FC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#F9F8FC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#F9F8FC"
                      }
                    }
                  },{
                    "#s-a50d7f62-4c53-42bc-96dd-714d90079d6c #s-Paragraph_24 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-a50d7f62-4c53-42bc-96dd-714d90079d6c #s-Paragraph_24 span": {
                      "attributes": {
                        "color": "#FF2D55",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt",
                        "line-height": "23px"
                      }
                    }
                  },{
                    "#s-a50d7f62-4c53-42bc-96dd-714d90079d6c #s-Paragraph_24 > .borderLayer": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#F9F8FC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#F9F8FC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#F9F8FC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#F9F8FC"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_25")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-a50d7f62-4c53-42bc-96dd-714d90079d6c #s-Paragraph_25": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-a50d7f62-4c53-42bc-96dd-714d90079d6c #s-Paragraph_25 span": {
                      "attributes": {
                        "color": "#80B8F1"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-a50d7f62-4c53-42bc-96dd-714d90079d6c #s-Image_25 svg": {
                      "attributes": {
                        "overlay": "#80B8F1"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-a50d7f62-4c53-42bc-96dd-714d90079d6c #s-Paragraph_25": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-a50d7f62-4c53-42bc-96dd-714d90079d6c #s-Paragraph_25 span": {
                      "attributes": {
                        "color": "#007DFF"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-a50d7f62-4c53-42bc-96dd-714d90079d6c #s-Image_25 svg": {
                      "attributes": {
                        "overlay": "#157EFB"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_26")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-a50d7f62-4c53-42bc-96dd-714d90079d6c #s-Paragraph_26": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-a50d7f62-4c53-42bc-96dd-714d90079d6c #s-Paragraph_26 span": {
                      "attributes": {
                        "color": "#80B8F1"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-a50d7f62-4c53-42bc-96dd-714d90079d6c #s-Image_26 svg": {
                      "attributes": {
                        "overlay": "#80B8F1"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-a50d7f62-4c53-42bc-96dd-714d90079d6c #s-Paragraph_26": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-a50d7f62-4c53-42bc-96dd-714d90079d6c #s-Paragraph_26 span": {
                      "attributes": {
                        "color": "#007DFF"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-a50d7f62-4c53-42bc-96dd-714d90079d6c #s-Image_26 svg": {
                      "attributes": {
                        "overlay": "#157EFB"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseup", ".s-a50d7f62-4c53-42bc-96dd-714d90079d6c .mouseup", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Paragraph_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-a50d7f62-4c53-42bc-96dd-714d90079d6c #s-Paragraph_1": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-a50d7f62-4c53-42bc-96dd-714d90079d6c #s-Paragraph_1 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-a50d7f62-4c53-42bc-96dd-714d90079d6c #s-Paragraph_2": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-a50d7f62-4c53-42bc-96dd-714d90079d6c #s-Paragraph_2 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-a50d7f62-4c53-42bc-96dd-714d90079d6c #s-Paragraph_3": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-a50d7f62-4c53-42bc-96dd-714d90079d6c #s-Paragraph_3 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-a50d7f62-4c53-42bc-96dd-714d90079d6c #s-Paragraph_4": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-a50d7f62-4c53-42bc-96dd-714d90079d6c #s-Paragraph_4 span": {
                      "attributes": {
                        "color": "#CBCBCB"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-a50d7f62-4c53-42bc-96dd-714d90079d6c #s-Paragraph_5": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-a50d7f62-4c53-42bc-96dd-714d90079d6c #s-Paragraph_5 span": {
                      "attributes": {
                        "color": "#CBCBCB"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-a50d7f62-4c53-42bc-96dd-714d90079d6c #s-Paragraph_6": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-a50d7f62-4c53-42bc-96dd-714d90079d6c #s-Paragraph_6 span": {
                      "attributes": {
                        "color": "#CBCBCB"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mousedown", ".s-a50d7f62-4c53-42bc-96dd-714d90079d6c .mousedown", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Paragraph_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-a50d7f62-4c53-42bc-96dd-714d90079d6c #s-Paragraph_1": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-a50d7f62-4c53-42bc-96dd-714d90079d6c #s-Paragraph_1 span": {
                      "attributes": {
                        "color": "#515356"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-a50d7f62-4c53-42bc-96dd-714d90079d6c #s-Paragraph_2": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-a50d7f62-4c53-42bc-96dd-714d90079d6c #s-Paragraph_2 span": {
                      "attributes": {
                        "color": "#515356"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-a50d7f62-4c53-42bc-96dd-714d90079d6c #s-Paragraph_3": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-a50d7f62-4c53-42bc-96dd-714d90079d6c #s-Paragraph_3 span": {
                      "attributes": {
                        "color": "#515356"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-a50d7f62-4c53-42bc-96dd-714d90079d6c #s-Paragraph_4": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-a50d7f62-4c53-42bc-96dd-714d90079d6c #s-Paragraph_4 span": {
                      "attributes": {
                        "color": "#515356"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-a50d7f62-4c53-42bc-96dd-714d90079d6c #s-Paragraph_5": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-a50d7f62-4c53-42bc-96dd-714d90079d6c #s-Paragraph_5 span": {
                      "attributes": {
                        "color": "#515356"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-a50d7f62-4c53-42bc-96dd-714d90079d6c #s-Paragraph_6": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-a50d7f62-4c53-42bc-96dd-714d90079d6c #s-Paragraph_6 span": {
                      "attributes": {
                        "color": "#515356"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });