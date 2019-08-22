// const { dest, parallel, series, src, task, watch } 	= require('gulp'),
//       colors    = require('ansi-colors'),
//       phplint   = require('gulp-phplint'),
//       fancyLog  = require('fancy-log')
// ;
//
// task('lint-php', function() {
//   return src(['src/**/*.php','!node_modules/**'])
//     .pipe(phplint('', { /* options */ }))
//     .pipe(phplint.reporter(function(file){
//       console.log(file);
//       const report = file.phplintReport || {};
//       if (report.error) {
//         console.error(report.message+' on line '+report.line+' of '+report.filename);
//       }
//     }));
// });
//
//
// task('phplint', function() {
//   return src('src/index.php')
//     .pipe(phplint());
// });
//
// task('phplint2', function() {
//   return src('src/index.php')
//     .pipe(phplint('', { /*opts*/ }))
//     .pipe(phplint.reporter('error'));
// });
//
// // task('default', parallel('phplint'));
// // task('default', parallel('phplint2'));
// task('default', parallel('lint-php'));



//// ---- Test phplint doc (not gulp-...)
const { dest, parallel, series, src, task, watch } 	= require('gulp'),
  phplint = require("phplint").lint;

task("phplint", function(cb) {
  phplint(["src/**/*.php"], { limit: 10 }, function(err, stdout, stderr) {
    console.log('ca ca tourne..');
    console.log(err);

    if (err) {
      console.log('lel');
      cb(err);
      process.exit(1);
    }
    cb();
  });
});

task('test', parallel('phplint'));
