"use strict";$(function(){function n(){g=h%2==0?"Player 2":"Player 1"}function e(){for(var n=0;n<h;n++){var e=Math.floor(8*Math.random());f.push(r[d[e]])}console.log("initializing!"),o()}function o(){c=[],setTimeout(function(){if(!(O<h))return void(O=0);o(),a(f[O]),m.removeClass("hidden"),m.html(g),console.log(f[O].audio),O++},1e3)}function a(n){m.html(g),l.src="audio/"+n.audio+".wav",l.play();var e=n.element.clone();e.appendTo("main").removeClass("hidden").addClass(n.animationIn).removeClass(n.animationOut),setTimeout(function(){e.removeClass(n.animationIn).addClass(n.animationOut)},1200),setTimeout(function(){e.remove()},1900)}function i(){var e=c.length===f.length&&c.every(function(n,e){return n===f[e].audio});if((C+=1)===h&&0===I)if(console.log(e),!0===e){var a=Math.floor(8*Math.random());f.push(r[d[a]]),c=[],C=0,o(),h+=1,n(),m.html("Pass!"),m.removeClass("hidden")}else!1===e&&(console.log("sudden death!"),C=0,I+=1,h+=1,n(),m.html("Fail! sudden death!!"),m.removeClass("hidden"),o());else C===h&&0!==I&&(!0===e?(console.log("winner winner!"),m.html("Pass!"),m.removeClass("hidden")):!1===e&&(console.log("tie"),m.html("Fail ---- TIE!"),m.removeClass("hidden")))}console.log("JS yo");var t=$(document),l=$("audio")[0],s=$(".welcome"),u=$("#game"),d=[49,50,51,52,53,54,55,56],m=$(".feedback"),r={49:{element:$(".first"),animationIn:"fadeInDownBig",animationOut:"zoomOut",audio:49},50:{element:$(".second"),animationIn:"zoomIn",animationOut:"fadeOut",audio:50},51:{element:$(".third"),animationIn:"flash",animationOut:"fadeOut",audio:51},52:{element:$(".fourth"),animationIn:"rotateIn",animationOut:"rotateOut",audio:52},53:{element:$(".fifth"),animationIn:"flashtwo",animationOut:"fadeOut",audio:53},54:{element:$(".sixth"),animationIn:"fadeInUpBig",animationOut:"lightSpeedOut",audio:54},55:{element:$(".seventh"),animationIn:"shake",animationOut:"fadeOut",audio:55},56:{element:$(".eighth"),animationIn:"slideInLeft",animationOut:"fadeOut",audio:56}},h=3,f=[],c=[],v=!1,g="player 1";t.keypress(function(n){a(r[""+n.charCode])}),u.on("click",function(){s.hide(),v=!0,e(),m.removeClass("hidden"),m.html(g)});var O=0;!function(){console.log("listening..."),t.keypress(function(n){c.push(n.charCode),console.log(c),i()})}();var I=0,C=0});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyIkIiwiY3VycmVudFBsYXllciIsImN1cnJlbnRSb3VuZCIsInJhbmQiLCJwcm9ncmFtU2VxdWVuY2UiLCJwdXNoIiwic291bmRzIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY29uc29sZSIsInZpc3VhbHMiLCJsb2ciLCJwbGF5QmFjayIsInVzZXJTZXF1ZW5jZSIsIiRmZWVkYmFjayIsInNlcXVlbmNlSW5kZXgiLCJodG1sIiwiYXVkaW8iLCJwbGF5IiwicGF0dGVybiIsIiRlbGVtZW50IiwiYXBwZW5kVG8iLCJzZXRUaW1lb3V0IiwiZWxlbWVudCIsImNsb25lIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImFuaW1hdGlvbkluIiwiYW5pbWF0aW9uT3V0IiwicmVtb3ZlIiwibGlzdGVuIiwidGhlU2FtZSIsImxlbmd0aCIsImV2ZXJ5IiwidiIsImkiLCJsb3NzZXMiLCJjb3VudCIsInVwZGF0ZVBsYXllciIsImRvY3VtZW50IiwiJGRvY3VtZW50IiwiJHdlbGNvbWUiLCIkZ2FtZSIsIjQ5IiwicGxheWluZyIsInZpc3VhbGlzZSIsImUiLCJjaGFyQ29kZSIsImdhbWVJbml0IiwiY29tcGFyZUFycmF5cyIsImtleXByZXNzIl0sIm1hcHBpbmdzIjoiWUFBQUEsR0FBRSxXQStGSUMsUUFBQUEsS0FERkEsRUFFRUMsRUFBQSxHQUFBLEVBQ0ssV0FHUixXQUlHLFFBQU1DLEtBQ05DLElBQUFBLEdBQUFBLEdBQUFBLEVBQUFBLEVBQWdCQyxFQUFhQyxJQUFPSCxDQUNyQyxHQUFBQSxHQUFBSSxLQUFBQyxNQUFBLEVBQUFELEtBQUFFLFNBQ0RDLEdBQVlMLEtBQUFNLEVBQVpMLEVBQUFILEtBRURPLFFBQUFFLElBQUEsaUJBRENDLElBY0UsUUFBQUEsS0FDQUMsS0FDRUQsV0FBQUEsV0FHQUUsS0FBQUEsRUFBZWQsR0FRZixZQUVEZSxFQWpCSCxFQUlJSCxLQUtBSCxFQUFRRSxFQUFJUixJQUNaWSxFQUFBQSxZQUFBQSxVQVBGRCxFQVFPRSxLQUFBaEIsR0FFTGUsUUFBQUEsSUFBQUEsRUFBQUEsR0FBQUUsT0FIQUYsS0FXSixLQUdBRSxRQUFNQyxHQUFOQyxHQUVBQyxFQUFTQyxLQUFBQSxHQUNUQyxFQUFBQSxJQUFBQSxTQUFZSCxFQUFNRixNQUFsQkssT0FDRUYsRUFBQUEsTUFDRCxJQUFFQSxHQUZIRCxFQUFBSSxRQUFBQyxPQUdBRixHQUFBQSxTQUFZLFFBQU1HLFlBQUEsVUFBQUMsU0FBQVAsRUFBQVEsYUFBQUYsWUFBQU4sRUFBQVMsY0FDaEJSLFdBQVNTLFdBRFhULEVBQUFLLFlBQUFOLEVBQUFRLGFBQUFELFNBQUFQLEVBQUFTLGVBR0QsTUFDRE4sV0FBQSxXQUNBRixFQUFTVSxVQUNQckIsTUF3QkUsUUFBSXNCLEtBQ0YsR0FBQUEsR0FBYXpCLEVBQVdBLFNBQUFILEVBQXhCNkIsUUFBQW5CLEVBQUFvQixNQUFBLFNBQUFDLEVBQUFDLEdBQUEsTUFBQUQsS0FBQS9CLEVBQUFnQyxHQUFBbEIsT0FFQUosS0FEQVYsR0FBQUEsS0FDQVUsR0FBQSxJQUFBdUIsRUFFQXhCLEdBREF5QixRQUFBQSxJQUFBTixJQUNBbkIsSUFBQUEsRUFBQUEsQ0FDQVgsR0FBQUEsR0FBQUEsS0FBQU0sTUFBQSxFQUFBRCxLQUFBRSxTQUNBOEIsR0FBQUEsS0FBQUEsRUFBQUEsRUFBQUEsS0FDQXhCLEtBQ0FBLEVBQUFBLEVBVEZGLElBV0VILEdBQVksRUFDWjRCLElBQ0FELEVBQVVwQixLQUFWLFNBQ0FmLEVBQUFBLFlBQUEsZUFDQXFDLElBQUFBLElBQ0F4QixRQUFBQSxJQUFVRSxpQkFDVkYsRUFBQUEsRUFDQUYsR0FBQUEsRUFKQVgsR0FBZ0IsRUFNaEJxQyxJQUNEeEIsRUFBQUUsS0FBQSx3QkF2QkhGLEVBd0JZdUIsWUFBVXBDLFVBQ3BCVyxTQUlPeUIsS0FBSU4sR0FBbUIsSUFBQUssS0FDaEIsSUFBWjNCLEdBQ0FLLFFBQUFBLElBQVVFLGtCQUNWRixFQUFVVyxLQUFBQSxTQUNYWCxFQUFBVyxZQUFBLFlBQ0YsSUFBQU0sSUFDRnRCLFFBQUFFLElBQUEsT0FyTkhHLEVBQUFFLEtBQUEsa0JBa05RRixFQUFVVyxZQUFZLFlBak41QmhCLFFBQVFFLElBQUksUUFBWkYsSUFBQUEsR0FBWVYsRUFBWndDLFVBR010QixFQUFRbEIsRUFBRSxTQUFTLEdBRG5CeUMsRUFBWXpDLEVBQUV3QyxZQUNkdEIsRUFBVWxCLEVBQUEsU0FDVjBDLEdBQVcxQyxHQUFFLEdBQUEsR0FBQSxHQUFuQixHQUFBLEdBQUEsR0FBQSxJQUNNMkMsRUFBVTNDLEVBQUEsYUFDVk0sR0FDTnNDLElBQ01qQyxRQUFBQSxFQUFVLFVBQ2RpQixZQUFJLGdCQUNGSixhQUFXLFVBQ1hJLE1BQUFBLElBRUFWLElBTFlNLFFBQUF4QixFQUFBLFdBT2Q0QixZQUFJLFNBQ0ZKLGFBQVcsVUFDWEksTUFBQUEsSUFFQVYsSUFYWU0sUUFBQXhCLEVBQUEsVUFhZDRCLFlBQUksUUFDRkosYUFBVyxVQUNYSSxNQUFBQSxJQUVBVixJQWpCWU0sUUFBQXhCLEVBQUEsV0FtQmQ0QixZQUFJLFdBQ0ZKLGFBQVcsWUFDWEksTUFBQUEsSUFFQVYsSUF2QllNLFFBQUF4QixFQUFBLFVBeUJkNEIsWUFBSSxXQUNGSixhQUFXLFVBQ1hJLE1BQUFBLElBRUFWLElBN0JZTSxRQUFBeEIsRUFBQSxVQStCZDRCLFlBQUksY0FDRkosYUFBVyxnQkFDWEksTUFBQUEsSUFFQVYsSUFuQ1lNLFFBQUF4QixFQUFBLFlBcUNkNEIsWUFBSSxRQUNGSixhQUFXLFVBQ1hJLE1BQUFBLElBRUFWLElBekNZTSxRQUFBeEIsRUFBQSxXQTJDZDRCLFlBQUksY0FDRkosYUFBVyxVQUNYSSxNQUFBQSxLQU9KMUIsRUFBQSxFQUNBRSxLQUNJRixLQU1KMkMsR0FBQSxFQUlJNUMsRUFBZ0IsVUFLbEJ3QyxHQUFNckIsU0FBVVQsU0FBQUEsR0FEbEJtQyxFQUVZMUIsRUFBQUEsR0FBVjJCLEVBQUFDLGFBUUFILEVBQUFBLEdBQUFBLFFBQUEsV0FDQUksRUFBQUEsT0FDQWxDLEdBQVVXLEVBQ1ZYLElBTEZBLEVBQUFXLFlBQUEsVUFLRVgsRUFBVUUsS0FBS2hCLElBNkJmYSxJQUFBQSxHQUFBLEdBd0NFSixXQUNBd0MsUUFBQUEsSUFBQUEsZ0JBQ0RULEVBSkRVLFNBQUEsU0FBQUosR0FNRGpDLEVBQUFULEtBQUEwQyxFQUFBQyxVQUNEdEMsUUFBQUUsSUFBQUUsR0FDQWlCLFFBU0EsSUFBQU0sR0FBQSxFQUNBQyxFQUFTWSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKCgpID0+IHtcbiAgY29uc29sZS5sb2coJ0pTIHlvJyk7XG5cbiAgY29uc3QgJGRvY3VtZW50ID0gJChkb2N1bWVudCk7XG4gIGNvbnN0IGF1ZGlvID0gJCgnYXVkaW8nKVswXTtcbiAgY29uc3QgJHdlbGNvbWUgPSAkKCcud2VsY29tZScpO1xuICBjb25zdCAkZ2FtZSA9ICQoJyNnYW1lJyk7XG4gIGNvbnN0IHNvdW5kcyA9IFs0OSw1MCw1MSw1Miw1Myw1NCw1NSw1Nl07XG4gIGNvbnN0ICRmZWVkYmFjayA9ICQoJy5mZWVkYmFjaycpO1xuICBjb25zdCB2aXN1YWxzID0ge1xuICAgIDQ5OiB7XG4gICAgICBlbGVtZW50OiAkKCcuZmlyc3QnKSxcbiAgICAgIGFuaW1hdGlvbkluOiAnZmFkZUluRG93bkJpZycsXG4gICAgICBhbmltYXRpb25PdXQ6ICd6b29tT3V0JyxcbiAgICAgIGF1ZGlvOiA0OVxuICAgIH0sXG4gICAgNTA6IHtcbiAgICAgIGVsZW1lbnQ6ICQoJy5zZWNvbmQnKSxcbiAgICAgIGFuaW1hdGlvbkluOiAnem9vbUluJyxcbiAgICAgIGFuaW1hdGlvbk91dDogJ2ZhZGVPdXQnLFxuICAgICAgYXVkaW86IDUwXG4gICAgfSxcbiAgICA1MToge1xuICAgICAgZWxlbWVudDogJCgnLnRoaXJkJyksXG4gICAgICBhbmltYXRpb25JbjogJ2ZsYXNoJyxcbiAgICAgIGFuaW1hdGlvbk91dDogJ2ZhZGVPdXQnLFxuICAgICAgYXVkaW86IDUxXG4gICAgfSxcbiAgICA1Mjoge1xuICAgICAgZWxlbWVudDogJCgnLmZvdXJ0aCcpLFxuICAgICAgYW5pbWF0aW9uSW46ICdyb3RhdGVJbicsXG4gICAgICBhbmltYXRpb25PdXQ6ICdyb3RhdGVPdXQnLFxuICAgICAgYXVkaW86IDUyXG4gICAgfSxcbiAgICA1Mzoge1xuICAgICAgZWxlbWVudDogJCgnLmZpZnRoJyksXG4gICAgICBhbmltYXRpb25JbjogJ2ZsYXNodHdvJyxcbiAgICAgIGFuaW1hdGlvbk91dDogJ2ZhZGVPdXQnLFxuICAgICAgYXVkaW86IDUzXG4gICAgfSxcbiAgICA1NDoge1xuICAgICAgZWxlbWVudDogJCgnLnNpeHRoJyksXG4gICAgICBhbmltYXRpb25JbjogJ2ZhZGVJblVwQmlnJyxcbiAgICAgIGFuaW1hdGlvbk91dDogJ2xpZ2h0U3BlZWRPdXQnLFxuICAgICAgYXVkaW86IDU0XG4gICAgfSxcbiAgICA1NToge1xuICAgICAgZWxlbWVudDogJCgnLnNldmVudGgnKSxcbiAgICAgIGFuaW1hdGlvbkluOiAnc2hha2UnLFxuICAgICAgYW5pbWF0aW9uT3V0OiAnZmFkZU91dCcsXG4gICAgICBhdWRpbzogNTVcbiAgICB9LFxuICAgIDU2OiB7XG4gICAgICBlbGVtZW50OiAkKCcuZWlnaHRoJyksXG4gICAgICBhbmltYXRpb25JbjogJ3NsaWRlSW5MZWZ0JyxcbiAgICAgIGFuaW1hdGlvbk91dDogJ2ZhZGVPdXQnLFxuICAgICAgYXVkaW86IDU2XG4gICAgfVxuXG4gIH07XG5cbiAgLy8gY3VycmVudCByb3VuZC4gZW1wdHkgcHJvZ3JhbVNlcXVlbmNlIGFycmF5LFxuICAvL2dldHMgZmlsbGVkIHgzIGF0IHN0YXJ0IHRoZW4gKG5lZWRzIHRvIGJlICsgMSBvciAyIHBlciByb3VuZCkhISEhXG4gIGxldCBjdXJyZW50Um91bmQgPSAzO1xuICBsZXQgcHJvZ3JhbVNlcXVlbmNlID0gW107XG4gIGxldCB1c2VyU2VxdWVuY2UgPSBbXTtcbiAgbGV0IG51bUNvZGUgPSBudWxsO1xuXG5cbiAgLy9QbGF5aW5nIHllcy8gbm8gc3dpdGNoXG4gIGxldCBwbGF5aW5nID0gZmFsc2U7XG5cblxuICBsZXQgY3VycmVudFBsYXllciA9ICdwbGF5ZXIgMSc7XG5cblxuICAvL2Fzc2lnbnMgdGhlIGF1ZGlvIHNyYyBhY2NvcmRpbmcgdG8ga2V5cHJlc3MgaWQgb2Yga2V5cyAxLTguXG4gICRkb2N1bWVudC5rZXlwcmVzcyhmdW5jdGlvbihlKSB7XG4gICAgY29uc3QgcGF0dGVybiA9IHZpc3VhbHNbYCR7ZS5jaGFyQ29kZX1gXTtcbiAgICB2aXN1YWxpc2UocGF0dGVybik7XG4gIH0pO1xuXG5cbiAgLy9zd2l0Y2hlcyBwbGF5aW5nIHZhciB0byB0cnVlIGFuZCBpbml0aWFsemVzIHRoZSBnYW1lIDopXG4gIC8vaGlkZXMgdGhlIHdlbGNvbWUgZGl2XG4gICRnYW1lLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAkd2VsY29tZS5oaWRlKCk7XG4gICAgcGxheWluZyA9IHRydWU7XG4gICAgZ2FtZUluaXQoKTtcbiAgICAkZmVlZGJhY2sucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICRmZWVkYmFjay5odG1sKGN1cnJlbnRQbGF5ZXIpO1xuICB9KTtcblxuICBmdW5jdGlvbiB1cGRhdGVQbGF5ZXIgKCkge1xuICAgIGlmIChjdXJyZW50Um91bmQgJSAyID09PSAwKSB7XG4gICAgICBjdXJyZW50UGxheWVyID0gJ1BsYXllciAyJztcbiAgICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRSb3VuZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnRQbGF5ZXIgPSAnUGxheWVyIDEnO1xuICAgIH1cbiAgfVxuICAvL2luaXRpYWxpemVzIHRoZSBidWlsZGluZyBvZiB0aGUgcHJvZ3JhbSBhcnJheVxuICBmdW5jdGlvbiBnYW1lSW5pdCAoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50Um91bmQ7IGkrKyl7XG4gICAgICBjb25zdCByYW5kID0gKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo4KSk7XG4gICAgICBwcm9ncmFtU2VxdWVuY2UucHVzaCh2aXN1YWxzW3NvdW5kc1tyYW5kXV0pO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnaW5pdGlhbGl6aW5nIScpO1xuICAgIHBsYXlCYWNrKCk7XG4gIH1cblxuXG4gIC8vIGhlcmUgZG9lcyB0aGVyZSBuZWVkIHRvIGJlIGEgZ2FtZSBhZGQgcmFuZG9tIGFkZGl0aW9uIHRvIGFycmF5IE9SIGEgd2F5IG9mIHVzaW5nIHRoZSBhYm92ZSBmdW5jdGlvbiBqdXN0IHRvIGFkZCBvbmU/XG5cbiAgLy90aGlzIHBsYXlzIGJhY2sgdGhlIGNvbnN0cnVjdGVkIHByb2dyYW0gYXJyYXlcbiAgbGV0IHNlcXVlbmNlSW5kZXggPSAwO1xuXG5cbiAgZnVuY3Rpb24gcGxheUJhY2soKSB7XG4gICAgdXNlclNlcXVlbmNlID0gW107XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBhdWRpby5zcmMgPSBgYXVkaW8vJHtwcm9ncmFtU2VxdWVuY2Vbc2VxdWVuY2VJbmRleF0uYXVkaW99LndhdmA7XG4gICAgICAvLyBhdWRpby5wbGF5KCk7XG4gICAgICBpZiAoc2VxdWVuY2VJbmRleCA8IGN1cnJlbnRSb3VuZCkge1xuICAgICAgICBwbGF5QmFjaygpO1xuICAgICAgICB2aXN1YWxpc2UocHJvZ3JhbVNlcXVlbmNlW3NlcXVlbmNlSW5kZXhdKTtcbiAgICAgICAgJGZlZWRiYWNrLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAgICAgJGZlZWRiYWNrLmh0bWwoY3VycmVudFBsYXllcik7XG5cbiAgICAgICAgY29uc29sZS5sb2cocHJvZ3JhbVNlcXVlbmNlW3NlcXVlbmNlSW5kZXhdLmF1ZGlvKTtcbiAgICAgICAgc2VxdWVuY2VJbmRleCsrO1xuICAgICAgfSBlbHNlIHtcblxuICAgICAgICBzZXF1ZW5jZUluZGV4ID0gMDtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICBmdW5jdGlvbiB2aXN1YWxpc2UgKHBhdHRlcm4pIHtcbiAgICAvLyBjb25zdCBwYXR0ZXJuID0gdmlzdWFsc1tpXTtcbiAgICAkZmVlZGJhY2suaHRtbChjdXJyZW50UGxheWVyKTtcbiAgICBhdWRpby5zcmMgPSBgYXVkaW8vJHtwYXR0ZXJuLmF1ZGlvfS53YXZgO1xuICAgIGF1ZGlvLnBsYXkoKTtcbiAgICBjb25zdCAkZWxlbWVudCA9IHBhdHRlcm4uZWxlbWVudC5jbG9uZSgpO1xuICAgICRlbGVtZW50LmFwcGVuZFRvKCdtYWluJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpLmFkZENsYXNzKHBhdHRlcm4uYW5pbWF0aW9uSW4pLnJlbW92ZUNsYXNzKHBhdHRlcm4uYW5pbWF0aW9uT3V0KTtcbiAgICBzZXRUaW1lb3V0KCAoKSA9PiB7XG4gICAgICAkZWxlbWVudC5yZW1vdmVDbGFzcyhwYXR0ZXJuLmFuaW1hdGlvbkluKS5hZGRDbGFzcyhwYXR0ZXJuLmFuaW1hdGlvbk91dCk7XG4gICAgfSwgMTIwMCk7XG4gICAgc2V0VGltZW91dCggKCkgPT4ge1xuICAgICAgJGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfSwgMTkwMCk7XG4gIH1cbiAgLy9GdW5jdGlvbiBwdXNoZXMga2V5IGNoYXJjb2RlcyB0aGUgdXNlciBpbnB1dHMgdG8gdGhlIHVzZXJTZXF1ZW5jZSBhcnJheS5cbiAgZnVuY3Rpb24gbGlzdGVuKCkge1xuICAgIGNvbnNvbGUubG9nKCdsaXN0ZW5pbmcuLi4nKTtcbiAgICAkZG9jdW1lbnQua2V5cHJlc3MoZnVuY3Rpb24oZSkge1xuICAgICAgdXNlclNlcXVlbmNlLnB1c2goZS5jaGFyQ29kZSk7XG4gICAgICBjb25zb2xlLmxvZyh1c2VyU2VxdWVuY2UpO1xuICAgICAgY29tcGFyZUFycmF5cygpO1xuICAgIH0pO1xuXG4gIH1cbiAgLy9cbiAgbGlzdGVuKCk7XG5cbiAgbGV0IGxvc3NlcyA9IDA7XG4gIGxldCBjb3VudCAgPSAwO1xuXG5cblxuICAvLyBjb21wYXJlcyB0aGUgdHdvIGFycmF5cyB3aGVuIHRoZSBsZW5ndGggbWF0Y2hlcyB0aGUgY3VycmVudCByb3VuZC5cbiAgLy8gbm90IHN1cGVyIHNpY2ssY291bGRudCBnZXQgaXQgc3RvcCB0cmlnZ2VyaW5nIG9uIGV2ZXJ5IGtleXByZXNzXG4gIC8vIGlmIHBsYXllciBwYXNzZXMgdGVzdCArMSBpcyBhZGRlZCB0byByb3VuZCBsZW5ndGggYW5kIHBsYXliYWNrIHN0YXJ0cyBhZ2Fpbi5cbiAgZnVuY3Rpb24gY29tcGFyZUFycmF5cygpIHtcbiAgICBjb25zdCB0aGVTYW1lID0gdXNlclNlcXVlbmNlLmxlbmd0aCA9PT0gcHJvZ3JhbVNlcXVlbmNlLmxlbmd0aCAmJiB1c2VyU2VxdWVuY2UuZXZlcnkoKHYsaSkgPT4gdiA9PT0gcHJvZ3JhbVNlcXVlbmNlW2ldLmF1ZGlvKTtcbiAgICBjb3VudCArPSAxO1xuICAgIGlmICgoY291bnQgPT09IGN1cnJlbnRSb3VuZCkgJiYgKGxvc3NlcyA9PT0gMCkpe1xuICAgICAgY29uc29sZS5sb2codGhlU2FtZSk7XG4gICAgICBpZiAodGhlU2FtZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjgpO1xuICAgICAgICBwcm9ncmFtU2VxdWVuY2UucHVzaCh2aXN1YWxzW3NvdW5kc1tyYW5kXV0pO1xuICAgICAgICB1c2VyU2VxdWVuY2UgPSBbXTtcbiAgICAgICAgY291bnQgPSAwO1xuICAgICAgICBwbGF5QmFjaygpO1xuICAgICAgICBjdXJyZW50Um91bmQgKz0gMTtcbiAgICAgICAgdXBkYXRlUGxheWVyKCk7XG4gICAgICAgICRmZWVkYmFjay5odG1sKCdQYXNzIScpO1xuICAgICAgICAkZmVlZGJhY2sucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgfSBlbHNlIGlmICh0aGVTYW1lID09PSBmYWxzZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnc3VkZGVuIGRlYXRoIScpO1xuICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgIGxvc3NlcyArPSAxO1xuICAgICAgICBjdXJyZW50Um91bmQgKz0gMTtcbiAgICAgICAgdXBkYXRlUGxheWVyKCk7XG4gICAgICAgICRmZWVkYmFjay5odG1sKCdGYWlsISBzdWRkZW4gZGVhdGghIScpO1xuICAgICAgICAkZmVlZGJhY2sucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgICBwbGF5QmFjaygpO1xuXG4gICAgICAgIC8vdGhpcyBib3R0b20gcGFydCBvZiB0aGUgaWYgZWxzZSBhY3RzIGFzIHRoZSBzdWRkZW4gZGVhdGggY2FsY3VsYXRvciBwb3J0aW9uIG9mIHRoZSBnYW1lLCB3b3JrcyBvbiB3aGV0aGVyIGEgbG9zcyB3YXMgc3RvcmVkIGluIHRoZSAnbG9zc2VzJyB2YXIuXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICgoY291bnQgPT09IGN1cnJlbnRSb3VuZCkgJiYgKGxvc3NlcyAhPT0gMCkpe1xuICAgICAgaWYgKHRoZVNhbWUgPT09IHRydWUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3dpbm5lciB3aW5uZXIhJyk7XG4gICAgICAgICRmZWVkYmFjay5odG1sKCdQYXNzIScpO1xuICAgICAgICAkZmVlZGJhY2sucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgfSBlbHNlIGlmICh0aGVTYW1lID09PSBmYWxzZSkge1xuICAgICAgICBjb25zb2xlLmxvZygndGllJyk7XG4gICAgICAgICRmZWVkYmFjay5odG1sKCdGYWlsIC0tLS0gVElFIScpO1xuICAgICAgICAkZmVlZGJhY2sucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbn0pO1xuIl19
