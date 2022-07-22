
const fs = require('fs')
const css = require('css');
const path = require('path')

class Iconfont {
  render(fpath, options){

    let cssTxtBuffet = fs.readFileSync(fpath)

    let cssText = cssTxtBuffet.toString()

    let obj = css.parse(cssText);


    let outputJson = {}

    obj.stylesheet.rules.forEach(val=>{

      try {
        if(val.selectors[0].indexOf('.') !== -1 && val.selectors[0].indexOf(':before') !==-1) {

          let key = val.selectors[0].replace('.', '').replace('icon-', '').replace(':before', '')
          let base16 = val.declarations[0].value.replace(/\\/g, '').replace(/\"/g, '')

          outputJson[key] = parseInt(base16, 16)
        }

      } catch (e) {

      }
    })

    let outPut = `${JSON.stringify(outputJson, null, 2)}`
    let fileName=options.outputFileName+'on'

    fs.writeFileSync(path.resolve(fpath, '../', fileName), outPut)


  }
}

module.exports = Iconfont