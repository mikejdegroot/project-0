"use strict";$(function(){function o(){for(var o=0;o<e;o++){console.log("initializing!");var n=Math.floor(8*Math.random());i.push(a[n])}console.log(i)}console.log("JS yo");var n=$(document),c=$("audio")[0],l=($(".welcome"),$("#game")),a=["49","50","51","52","53","54","55","56"],e=3,i=[],r=!1;n.keypress(function(o){console.log(o.charCode),c.src="audio/"+o.charCode+".wav",c.play()}),l.on("click",function(){r=!0,console.log(r),o()})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyIkIiwicHJvZ3JhbVNlcXVlbmNlIiwiaSIsImN1cnJlbnRSb3VuZCIsImNvbnNvbGUiLCJsb2ciLCJyYW5kIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicHVzaCIsIiRzb3VuZHMiLCIkZG9jdW1lbnQiLCJkb2N1bWVudCIsImF1ZGlvIiwiJGdhbWUiLCJwbGF5aW5nIiwicGxheSIsImUiLCJjaGFyQ29kZSIsInNyYyIsImdhbWVJbml0Il0sIm1hcHBpbmdzIjoiWUFBQUEsR0FBRSxXQXlDSUMsUUFBQUEsS0FDRCxJQUFBLEdBQUFDLEdBQUEsRUFBQUEsRUFBQUMsRUFBQUQsSUFBQSxDQUNERSxRQUFRQyxJQUFJSixnQkFDYixJQUFBSyxHQUFBQyxLQUFBQyxNQUFBLEVBQUFELEtBQUFFLFNBNUNIUixHQUFBUyxLQUFBQyxFQUFBTCxJQTJDSUYsUUFBUUMsSUFBSUosR0ExQ2RHLFFBQVFDLElBQUksUUFJWixJQUFNTyxHQUFjQyxFQUFBQSxVQUNkQyxFQUFVZCxFQUFBLFNBQWhCLEdBRU1lLEdBRGFmLEVBQUEsWUFDSEEsRUFBQSxVQUNWVyxHQUFXLEtBQU0sS0FBSyxLQUFLLEtBQWpCLEtBQUEsS0FBMkIsS0FBSyxNQUs1Q1YsRUFBQUEsRUFBQUEsS0FPSmUsR0FBQSxDQUlFRixHQUFNRyxTQUFOLFNBQUFDLEdBSEZkLFFBQUFDLElBQUFhLEVBQUFDLFVBRUVMLEVBQU1NLElBQU4sU0FBcUJGLEVBQUVDLFNBQXZCLE9BS0pMLEVBQUFHLFNBS0lJLEVBQUFBLEdBQUFBLFFBQUFBLFdBRkFMLEdBQVUsRUFLWlosUUFBU2lCLElBQUFBLEdBQ1BBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoKCkgPT4ge1xuICBjb25zb2xlLmxvZygnSlMgeW8nKTtcblxuXG5cbiAgY29uc3QgJGRvY3VtZW50ID0gJChkb2N1bWVudCk7XG4gIGNvbnN0IGF1ZGlvID0gJCgnYXVkaW8nKVswXTtcbiAgY29uc3QgJHdlbGNvbWUgPSAkKCcud2VsY29tZScpO1xuICBjb25zdCAkZ2FtZSA9ICQoJyNnYW1lJyk7XG4gIGNvbnN0ICRzb3VuZHMgPSBbJzQ5JywgJzUwJywnNTEnLCc1MicsJzUzJywnNTQnLCc1NScsJzU2J107XG5cblxuLy8gY3VycmVudCBST1VORCBESVNQTEFZLiBJTVBPUlRBTlQhISEhXG4gIGxldCBjdXJyZW50Um91bmQgPSAzO1xuICBsZXQgcHJvZ3JhbVNlcXVlbmNlID0gW107XG5cblxuLy9QbGF5aW5nIHllcy8gbm8gc3dpdGNoXG4gIGxldCBwbGF5aW5nID0gZmFsc2U7XG5cblxuICAvL2Fzc2lnbnMgdGhlIGF1ZGlvIHNyYyBhY2NvcmRpbmcgdG8ga2V5cHJlc3MgaWQgb2Yga2V5cyAxLTggQk9PTSFcbiAgJGRvY3VtZW50LmtleXByZXNzKGZ1bmN0aW9uKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlLmNoYXJDb2RlKTtcbiAgICBhdWRpby5zcmMgPSBgYXVkaW8vJHtlLmNoYXJDb2RlfS53YXZgO1xuICAgIGF1ZGlvLnBsYXkoKTtcbiAgfSk7XG5cblxuLy9zd2l0Y2hlcyBwbGF5aW5nIHZhciB0byB0cnVlIGFuZCBpbml0aWFsemVzIHRoZSBnYW1lIDopXG4gICRnYW1lLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAvLyAkd2VsY29tZS5hZGRDbGFzcygnLmhpZGRlbicpO1xuICAgIHBsYXlpbmcgPSB0cnVlO1xuICAgIGNvbnNvbGUubG9nKHBsYXlpbmcpO1xuICAgIGdhbWVJbml0KCk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGdhbWVJbml0ICgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRSb3VuZDsgaSsrKXtcbiAgICAgIGNvbnNvbGUubG9nKCdpbml0aWFsaXppbmchJyk7XG4gICAgICBjb25zdCByYW5kID0gKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo4KSk7XG4gICAgICBwcm9ncmFtU2VxdWVuY2UucHVzaCgkc291bmRzW3JhbmRdKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2cocHJvZ3JhbVNlcXVlbmNlKTtcbiAgfVxuXG5cblxufSk7XG4iXX0=
