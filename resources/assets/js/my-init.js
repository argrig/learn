module.exports = class {
  constructor() {
    //console.log("FROM CONSTRUCTOR: " + JSON.stringify(s)) ;
    axios.post('/problem/index')
      .then (
        (response) => {
          s.problems = response.data ;
        }
      )
      .catch (
        (error) => {
          console.log("FROM problem/index : " + error ) ;
        }    
      );
  } 
}
