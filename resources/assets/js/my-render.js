module.exports = class {
  render(obj, xvar='x') {
    let ret = {} ;
    for(let key in obj) {
      let dt   = obj[key].data ;
      if(typeof(dt.xvar) !== 'undefined') {xvar=dt.xvar} ;
      switch(obj[key].type) {
        case "linear_system" :
          ret[key] = this.render_linear_system(dt,xvar) ;
        break;
      }
    }
    //console.log("RETURN IS:" + ret.A) ;
    return ret ;
  } ;

  render_linear_system(dt, xvar) {
    let ret="\\begin{array}{" + "rc".repeat(dt[0].length-1) + "r}\n" ;
    for(let i=0; i<dt.length; i++) {
      for(let j=0; j<dt[i].length; j++) {
        let poch = xvar + "_" + (j+1) ;
        switch(j) {
          case 0:
            switch(dt[i][j]) {
              case 0:
                //ret += " & " ;
              break;
              case 1:
                ret += poch ;
              break;
              case -1:
                ret += " - " + poch ;
              break;
              default:
                ret += dt[i][j] + poch;
              break;
            }
            break ;
          case dt[0].length-1 :
            ret += " & = & " + dt[i][j] + "\\\\\n" ;
          break;
          default :
            switch(dt[i][j]) {
              case 0:
                ret += " & & " ;
              break ;
              case 1:
                ret += " & + & " + poch ;
              break;
              case -1:
                ret += " & - & " + poch ;
              break;
              default :
                sign = (dt[i][j] > 0) ? " & + & " : " & - & " ;
                abs  = (dt[i][j] > 0) ? dt[i][j] : -dt[i][j] ;
                ret += sign + abs + poch;
            }
        }
      }
    };
    ret += "\\end{array}" ;
    return ret ;
  }
}
