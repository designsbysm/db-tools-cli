// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE
'use strict';

var Arg = require("bs-platform/lib/js/arg.js");
var Block = require("bs-platform/lib/js/block.js");

function logInfo(command, message, color) {
  var colorCode;
  switch (color) {
    case 0 : 
        colorCode = "\x1b[31m";
        break;
    case 1 : 
        colorCode = "\x1b[33m";
        break;
    case 2 : 
        colorCode = "\x1b[37m";
        break;
    
  }
  console.log("\x1b[2m\x1b[37m[" + (String(command) + ("]\x1b[0m \x1b[1m" + (String(colorCode) + ("" + (String(message) + "\x1b[0m"))))));
  return /* () */0;
}

function verifyArgs(param) {
  var args = /* record */[
    /* action : Empty */0,
    /* db */"",
    /* source */"",
    /* target */""
  ];
  var speclist_000 = /* tuple */[
    "--backup",
    /* Unit */Block.__(0, [(function (param) {
            args[/* action */0] = /* Backup */1;
            args[/* source */2] = "localhost";
            return /* () */0;
          })]),
    " backup local database to the <folder> in config.json"
  ];
  var speclist_001 = /* :: */[
    /* tuple */[
      "--restore",
      /* Unit */Block.__(0, [(function (param) {
              args[/* action */0] = /* Restore */2;
              args[/* target */3] = "localhost";
              return /* () */0;
            })]),
      " restore local database from the <folder> in config.json"
    ],
    /* :: */[
      /* tuple */[
        "--transfer",
        /* Unit */Block.__(0, [(function (param) {
                args[/* action */0] = /* Transfer */3;
                return /* () */0;
              })]),
        " transfer database from the --source <server> to the --target <server>"
      ],
      /* :: */[
        /* tuple */[
          "--db",
          /* String */Block.__(4, [(function (value) {
                  args[/* db */1] = value;
                  return /* () */0;
                })]),
          " <name> of database found in config.json"
        ],
        /* :: */[
          /* tuple */[
            "--source",
            /* String */Block.__(4, [(function (value) {
                    args[/* source */2] = value;
                    return /* () */0;
                  })]),
            " source <server> found in config.json"
          ],
          /* :: */[
            /* tuple */[
              "--target",
              /* String */Block.__(4, [(function (value) {
                      args[/* target */3] = value;
                      return /* () */0;
                    })]),
              " target <server> found in config.json"
            ],
            /* :: */[
              /* tuple */[
                "-help",
                /* Unit */Block.__(0, [(function (param) {
                        return /* () */0;
                      })]),
                ""
              ],
              /* [] */0
            ]
          ]
        ]
      ]
    ]
  ];
  var speclist = /* :: */[
    speclist_000,
    speclist_001
  ];
  var alignedSpeclist = Arg.align(undefined, speclist);
  Arg.parse(alignedSpeclist, (function (param) {
          return /* () */0;
        }), "dbTools Options:");
  var action = args[/* action */0];
  var db = args[/* db */1];
  var source = args[/* source */2];
  var target = args[/* target */3];
  if (action !== 0) {
    if (db === "") {
      return /* Error */Block.__(1, [/* `missing_option */[
                  204242542,
                  Arg.usage_string(alignedSpeclist, "Required command option(s) missing:")
                ]]);
    } else {
      switch (action - 1 | 0) {
        case 0 : 
            if (source === "") {
              return /* Error */Block.__(1, [/* `missing_option */[
                          204242542,
                          Arg.usage_string(alignedSpeclist, "Required command option(s) missing:")
                        ]]);
            } else {
              return /* Ok */Block.__(0, [/* `success_args */[
                          208191641,
                          args
                        ]]);
            }
        case 1 : 
            if (target === "") {
              return /* Error */Block.__(1, [/* `missing_option */[
                          204242542,
                          Arg.usage_string(alignedSpeclist, "Required command option(s) missing:")
                        ]]);
            } else {
              return /* Ok */Block.__(0, [/* `success_args */[
                          208191641,
                          args
                        ]]);
            }
        case 2 : 
            if (source === "" || target === "") {
              return /* Error */Block.__(1, [/* `missing_option */[
                          204242542,
                          Arg.usage_string(alignedSpeclist, "Required command option(s) missing:")
                        ]]);
            } else if (source === target) {
              return /* Error */Block.__(1, [/* same_servers */840618807]);
            } else {
              return /* Ok */Block.__(0, [/* `success_args */[
                          208191641,
                          args
                        ]]);
            }
        
      }
    }
  } else {
    return /* Error */Block.__(1, [/* missing_action */-151525713]);
  }
}

function verifyConfig(result) {
  if (result.tag) {
    return result;
  } else {
    logInfo("verifyConfig", "load config & add servers to command", /* White */2);
    return /* Ok */Block.__(0, [/* `success_command */[
                58977167,
                "command"
              ]]);
  }
}

function executeCommand(result) {
  if (result.tag) {
    return result;
  } else {
    logInfo("executeCommand", "exec command and get success/error message (exit code & stderr?)", /* White */2);
    return /* Ok */Block.__(0, [/* `success_result */[
                -531045607,
                "message"
              ]]);
  }
}

function displayResult(result) {
  var match;
  if (result.tag) {
    var code = result[0];
    var message = typeof code === "number" ? (
        code !== -151525713 ? (
            code !== 840618807 ? "Unknown error" : "--source and --target can't point to the same server"
          ) : "Missing action option [--backup | --restore | --transfer] is required."
      ) : (
        code[0] !== 204242542 ? "Unknown error" : code[1]
      );
    match = /* tuple */[
      message,
      /* Red */0
    ];
  } else {
    var code$1 = result[0];
    match = typeof code$1 === "number" || code$1[0] !== -531045607 ? /* tuple */[
        "Unknown result",
        /* Red */0
      ] : /* tuple */[
        "Success",
        /* Yellow */1
      ];
  }
  logInfo("dbTools", match[0], match[1]);
  console.log("");
  return /* () */0;
}

displayResult(executeCommand(verifyConfig(verifyArgs(/* Error */Block.__(1, [/* empty */-270910835])))));

exports.logInfo = logInfo;
exports.verifyArgs = verifyArgs;
exports.verifyConfig = verifyConfig;
exports.executeCommand = executeCommand;
exports.displayResult = displayResult;
/*  Not a pure module */
