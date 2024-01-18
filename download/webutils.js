//WebUtils Extension by AblazeMuffin35

//This extension must run unsandboxed, so that it has access to the website.

(function (Scratch) {
"use strict";
if (!Scratch.extensions.unsandboxed) {
  throw new Error('The WebUtils Extension must run unsandboxed!');
}

let shouldactivate = false;

class WebUtils {
    getInfo() {
      return {
        id: 'webutils',
        name: 'WebUtils',
        color1: '#2E7D32',
        blocks: [
          { blockType: Scratch.BlockType.BUTTON, text: 'Discord Server', func: 'joinmydiscord' },
          {
            opcode: 'currenttime',
            blockType: Scratch.BlockType.REPORTER,
            text: 'current time'
          },
          {
            opcode: 'myIP',
            blockType: Scratch.BlockType.REPORTER,
            text: 'my IP'
          },
          {
            opcode: 'mybrowser',
            blockType: Scratch.BlockType.REPORTER,
            text: 'my browser'
          },
          {
            opcode: 'mylanguage',
            blockType: Scratch.BlockType.REPORTER,
            text: 'my preferred language'
          },
          {
            opcode: 'onlinecheck',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'online?'
          },
          {
            opcode: 'connectioninfo',
            blockType: Scratch.BlockType.REPORTER,
            text: 'connection [INFO]',
            arguments: {
              INFO: {
                  type: Scratch.ArgumentType.STRING,
                  menu: 'connectioninfomenu'
              }
          }
          },
          {
            opcode: 'screensize',
            blockType: Scratch.BlockType.REPORTER,
            text: 'screen [TYPE]',
            arguments: {
              TYPE: {
                  type: Scratch.ArgumentType.STRING,
                  menu: 'sizeoptionmenu'
              }
          }
          },
          '---',
          {
            opcode: 'pageinfo',
            blockType: Scratch.BlockType.REPORTER,
            text: 'page [INFO]',
            arguments: {
                INFO: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'pagemenu'
                }
            }
          },
          {
            opcode: 'setpageinfo',
            blockType: Scratch.BlockType.COMMAND,
            text: 'set page [INFO] to [DATA]',
            arguments: {
                INFO: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'pagemenu'
                },
                DATA: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'Cool Website'
                }
            }
          },
          {
            opcode: 'opentab',
            blockType: Scratch.BlockType.COMMAND,
            text: 'open new tab with [URL]',
            arguments: {
                URL: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'https://www.google.com/'
                }
            }
          },
          {
            opcode: 'replacetab',
            blockType: Scratch.BlockType.COMMAND,
            text: 'replace this tab with [URL]',
            arguments: {
                URL: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'https://www.google.com/'
                }
            }
          },
          {
            opcode: 'openwindow',
            blockType: Scratch.BlockType.COMMAND,
            text: 'open new window with [TYPE] [INPUT] width:[WIDTH] height:[HEIGHT] x:[LEFT] y:[TOP]',
            arguments: {
                TYPE: {
                    type: Scratch.ArgumentType.STRING,
                    menu: 'inputtypemenu'
                },
                INPUT: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'https://www.google.com/'
                },
                WIDTH: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: '500'
                },
                HEIGHT: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: '300'
                },
                LEFT: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: '100'
                },
                TOP: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: '100'
                }
            }
          },
          {
            opcode: 'reloadpage',
            blockType: Scratch.BlockType.COMMAND,
            text: 'reload this page',
            isTerminal: true
          },
          '---',
          {
            opcode: 'displayalert',
            blockType: Scratch.BlockType.COMMAND,
            text: 'display alert [TEXT]',
            arguments: {
                TEXT: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'Hello!'
                }
            }
          },
          {
            opcode: 'displayprompt',
            blockType: Scratch.BlockType.REPORTER,
            text: 'display prompt [TEXT]',
            arguments: {
                TEXT: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'How are you?'
                }
            }
          },
          {
            opcode: 'displayadvancedprompt',
            blockType: Scratch.BlockType.REPORTER,
            text: 'display prompt [TEXT] with [DEFAULT] as default and [CANCEL] when cancelled',
            arguments: {
                TEXT: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'How are you?'
                },
                DEFAULT: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'Good!'
                },
                CANCEL: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'User cancelled.'
                }
            }
          },
          {
            opcode: 'displayconfirm',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'display confirmation [TEXT]',
            arguments: {
                TEXT: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'Do you accept?'
                }
            }
          },
          '---',
          {
            opcode: 'setcookie',
            blockType: Scratch.BlockType.COMMAND,
            text: 'set cookie [NAME] to [VALUE]',
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'name'
              },
              VALUE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Peng'
              }
            }
          },
          {
            opcode: 'deletecookie',
            blockType: Scratch.BlockType.COMMAND,
            text: 'delete cookie [NAME]',
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'name'
              }
            }
          },
          {
            opcode: 'getcookies',
            blockType: Scratch.BlockType.REPORTER,
            text: 'get all cookies',
            disableMonitor: true
          },
          '---',
          {
            opcode: 'search',
            blockType: Scratch.BlockType.REPORTER,
            text: 'search [TEXT] in [ENGINE]',
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Penguin'
              },
              ENGINE: {
                type: Scratch.ArgumentType.STRING,
                menu: 'searchenginemenu'
              }
            }
          },
          {
            opcode: 'fetchurl',
            blockType: Scratch.BlockType.REPORTER,
            text: 'fetch [URL]',
            arguments: {
              URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://catfact.ninja/fact'
              }
            }
          },
          '---',
          {
            opcode: 'executejs',
            blockType: Scratch.BlockType.COMMAND,
            text: 'run [CODE] with Javascript',
            arguments: {
              CODE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'console.log("Hello!")'
              }
            }
          },
          {
            opcode: 'returnjs',
            blockType: Scratch.BlockType.REPORTER,
            text: 'get [CODE] with Javascript',
            arguments: {
              CODE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Math.PI'
              }
            }
          },
          '---',
          {
            opcode: 'throwerror',
            blockType: Scratch.BlockType.COMMAND,
            text: 'throw error [ERROR]',
            arguments: {
              ERROR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Something went wrong...'
              }
            }
          }
        ],
        menus: {
            pagemenu: {
                acceptReporters: true,
                items: [
                    'title',
                    'URL',
                    'domain name',
                    'path',
                    'protocol'
                ]
              },
              inputtypemenu: {
                acceptReporters: false,
                items: [
                    'URL',
                    'HTML'
                ]
              },
              searchenginemenu: {
                acceptReporters: true,
                items: [
                    'Google',
                    'Bing',
                    'Yahoo',
                    'Yandex',
                    'DuckDuckGo'
                ]
              },
              sizeoptionmenu: {
                acceptReporters: true,
                items: [
                  'width',
                  'height',
                  {
                    text: 'available width',
                    value: 'availWidth'
                  },
                  {
                    text: 'available height',
                    value: 'availHeight'
                  }
                ]
              },
              connectioninfomenu: {
                acceptReporters: true,
                items: [
                  {
                    text: 'ECT',
                    value: 'effectiveType'
                  },
                  {
                    text: 'RTT',
                    value: 'rtt'
                  },
                  'downlink'
                ]
              }
        }
      };
    }
    joinmydiscord() {
      window.open("https://discord.gg/YwdvExN82q", "_blank");
    }
    opentab(args) {
      window.open(args.URL, "_blank");
    }
    replacetab(args) {
      window.open(args.URL, "_self");
    }
    displayalert(args) {
      alert(args.TEXT);
    }
    displayprompt(args) {
      return prompt(args.TEXT);
    }
    displayconfirm(args) {
      return confirm(args.TEXT);
    }
    fetchurl(args) {
      return Scratch.fetch(args.URL)
      .then((r) => r.text())
      .catch(() => "");
    }
    myIP() {
        return Scratch.fetch("https://api.ipify.org")
        .then((r) => r.text())
        .catch(() => "");
    }
    mybrowser() {
      try {
        let has = (input) => navigator.userAgent.includes(input);
        if (has("Firefox")) return "Firefox";
        if (has("SamsungBrowser")) return "Samsung Internet";
        if ((has("Opera") || has("OPR")) && has("GX")) return "Opera GX";
        if (has("Opera") || has("OPR")) return "Opera";
        if (has("Trident")) return "Internet Explorer";
        if (has("Edge")) return "Edge Legacy";
        if (has("Edg")) return "Edge";
        if (has("YaBrowser") || has("YaSearchBrowser")) return "Yandex";
        if (has("Miui")) return "Mi Browser";
        if (has("UBrowser")) return "Uc Nrowser";
        if (has("Chrome")) return "Chrome";
        if (has("Safari")) return "Safari";
        return "not detected";
      } catch (err) {
        return "not detected";
      }
    }
    pageinfo(args) {
        if (args.INFO == "title"){
            return document.title;
        }
        else if (args.INFO == "URL"){
            return window.location.href;
        }
        else if (args.INFO == "domain name"){
            return window.location.hostname;
        }
        else if (args.INFO == "path"){
            return window.location.pathname;
        }
        else if (args.INFO == "protocol"){
            return window.location.protocol;
        }
    }
    setpageinfo(args) {
        if (args.INFO == "title"){
            document.title = args.DATA;
        }
        else if (args.INFO == "URL"){
            window.location.href = args.DATA;
        }
        else if (args.INFO == "domain name"){
            window.location.hostname = args.DATA;
        }
        else if (args.INFO == "path"){
            window.location.pathname = args.DATA;
        }
        else if (args.INFO == "protocol"){
            window.location.protocol = args.DATA;
        }
    }
    openwindow(args) {
      if (args.TYPE == "URL"){
        window.open(args.INPUT, "", `width=${args.WIDTH},height=${args.HEIGHT},left=${args.LEFT},top=${args.TOP}`);
      }
      if (args.TYPE == "HTML"){
        var newWindow = window.open("", "", `width=${args.WIDTH},height=${args.HEIGHT},left=${args.LEFT},top=${args.TOP}`);
        newWindow.document.write(args.INPUT);
      }
    }
    reloadpage(){
      location.reload();
    }
    search(args) {
      if (args.ENGINE == "Google"){
          return "https://www.google.com/search?q="+args.TEXT;
      }
      else if (args.ENGINE == "Bing"){
          return "https://www.bing.com/search?q="+args.TEXT;
      }
      else if (args.ENGINE == "Yahoo"){
          return "https://search.yahoo.com/search?p="+args.TEXT;
      }
      else if (args.ENGINE == "Yandex"){
          return "https://yandex.com/search/?text="+args.TEXT;
      }
      else if (args.ENGINE == "DuckDuckGo"){
          return "https://duckduckgo.com/?t=h_&q="+args.TEXT;
      }
    }
    executejs(args) {
      eval(args.CODE);
    }
    returnjs(args){
      return eval(args.CODE);
    }
    setcookie(args){
      document.cookie = `${args.NAME}=${args.VALUE};`;
    }
    getcookies(args){
      return document.cookie;
    }
    deletecookie(args){
      document.cookie = `${args.NAME}=""; expires=Thu, 01 Jan 2000 00:00:00 UTC; path=/;`;
    }
    screensize(args){
      return eval(`screen.${args.TYPE}`);
    }
    connectioninfo(args){
      return eval(`navigator.connection.${args.INFO}`);
    }
    onlinecheck(){
      return navigator.onLine;
    }
    currenttime(){
      return Date();
    }
    displayadvancedprompt(args){
      let answer = prompt(args.TEXT,args.DEFAULT);
      if (answer == null){
        return args.CANCEL;
      }
      else{
        return answer;
      }
    }
    mylanguage() {
      return navigator.language;
    }
    throwerror(args) {
      throw new Error(args.ERROR);
    }
  }

Scratch.extensions.register(new WebUtils());

})(Scratch);