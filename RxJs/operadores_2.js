const {XMLHttpRequest} = require('xmlhttprequest');
const {ajax} = require ('rxjs/ajax');

const {interval} = require('rxjs');
const {map,concatAll} =  require ('rxjs/operators');

ajax({
    createXHR: () => new XMLHttpRequest(),
    url: 'https://api.github.com/users/cod3rcursos/repos'
})
.pipe(

).subscribe(console.log)


