"use strict";$(function(){function e(){I=v%2==0?"Player 2":"Player 1"}function n(){for(var e=0;e<c;e++){var n=Math.floor(8*Math.random());O.push(f[h[n]])}console.log("initializing!"),a()}function a(){g=[],setTimeout(function(){if(!(p<c))return void(p=0);a(),o(O[p]),m.addClass("hidden"),m.html(I),console.log(O[p].audio),p++},1e3)}function o(e){m.html(I),s.src="audio/"+e.audio+".wav",s.play();var n=e.element.clone();n.appendTo("main").removeClass("hidden").addClass(e.animationIn).removeClass(e.animationOut),setTimeout(function(){n.removeClass(e.animationIn).addClass(e.animationOut)},1200),setTimeout(function(){n.remove()},1900)}function t(){var n=g.length===O.length&&g.every(function(e,n){return e===O[n].audio});if((T+=1)===c&&0===y)if(console.log(n),!0===n){var o=Math.floor(8*Math.random());O.push(f[h[o]]),console.log(O),g=[],T=0,c+=1,v+=1,e(),m.html("Pass! - next up "+I),m.removeClass("hidden"),setTimeout(a,3e3)}else!1===n&&(g=[],T=0,y+=1,v+=1,setTimeout(a,3e3),e(),m.html("Fail! sudden death!! -next up "+I),m.removeClass("hidden"));else T===c&&0!==y&&(!0===n?(m.html(I+" Wins!"),m.removeClass("hidden"),u.removeClass("hidden")):!1===n&&(m.html(I+" Fails!! ---- TIE!"),m.removeClass("hidden"),r.removeClass("hidden")))}console.log("JS yo");var i=$(document),s=$("audio")[0],l=$(".welcome"),d=$("#game"),m=$(".feedback"),u=$(".reset"),r=$(".endgame"),h=[49,50,51,52,53,54,55,56],f={49:{element:$(".first"),animationIn:"fadeInDownBig",animationOut:"zoomOut",audio:49},50:{element:$(".second"),animationIn:"zoomIn",animationOut:"fadeOut",audio:50},51:{element:$(".third"),animationIn:"flash",animationOut:"fadeOut",audio:51},52:{element:$(".fourth"),animationIn:"rotateIn",animationOut:"rotateOut",audio:52},53:{element:$(".fifth"),animationIn:"flashtwo",animationOut:"fadeOut",audio:53},54:{element:$(".sixth"),animationIn:"fadeInUpBig",animationOut:"lightSpeedOut",audio:54},55:{element:$(".seventh"),animationIn:"shake",animationOut:"fadeOut",audio:55},56:{element:$(".eighth"),animationIn:"slideInLeft",animationOut:"fadeOut",audio:56}},c=3,v=c,O=[],g=[],C=!1,I="player 1";i.keypress(function(e){o(f[""+e.charCode])}),d.on("click",function(){l.hide(),C=!0,m.removeClass("hidden"),m.html(I),setTimeout(n,3e3)});var p=0;!function(){console.log("listening..."),i.keypress(function(e){g.push(e.charCode),console.log(g),t()})}();var y=0,T=0;r.on("click",function(){c=3,v=c,O=[],g=[],C=!1,e(),y=0,T=0,m.html(""),l.show(),r.addClass("hidden")})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyIkIiwidXBkYXRlUGxheWVyIiwiY3VycmVudFBsYXllciIsImdhbWVJbml0IiwiY29uc29sZSIsImxvZyIsImkiLCJjdXJyZW50Um91bmQiLCJwbGF5QmFjayIsInByb2dyYW1TZXF1ZW5jZSIsInB1c2giLCJ2aXN1YWxzIiwic291bmRzIiwicmFuZCIsInZpc3VhbGlzZSIsIiRmZWVkYmFjayIsInNlcXVlbmNlSW5kZXgiLCJodG1sIiwiYXVkaW8iLCIkZWxlbWVudCIsInBhdHRlcm4iLCJyZW1vdmVDbGFzcyIsInNyYyIsInNldFRpbWVvdXQiLCJlbGVtZW50IiwiY2xvbmUiLCJhcHBlbmRUbyIsImFkZENsYXNzIiwiYW5pbWF0aW9uSW4iLCJhbmltYXRpb25PdXQiLCIkZG9jdW1lbnQiLCJrZXlwcmVzcyIsInVzZXJTZXF1ZW5jZSIsImxlbmd0aCIsImV2ZXJ5IiwidiIsImNvdW50IiwibG9zc2VzIiwiY3VycmVudFBsYXllck51bSIsInRoZVNhbWUiLCIkZW5kR2FtZSIsImRvY3VtZW50IiwiJHdlbGNvbWUiLCIkZ2FtZSIsIjQ5IiwiNTAiLCI1MSIsIjUyIiwiNTMiLCI1NCIsIjU1IiwiNTYiLCJwbGF5aW5nIiwiZSIsImNoYXJDb2RlIiwibGlzdGVuIiwic2hvdyJdLCJtYXBwaW5ncyI6IllBQUFBLEdBQUUsV0EyR0csUUFBTUMsS0FFTkMsRUFEQ0EsRUFBZ0IsR0FBaEIsRUFDRCxXQUdrQixXQUlsQixRQUFBQyxLQUNEQyxJQUFBQSxHQUFRQyxHQUFJLEVBQUFDLEVBQUFDLEVBQVpELElBQUEsQ0FDQUUsR0FBQUEsR0FBQUEsS0FBQUEsTUFBQUEsRUFBQUEsS0FBQUEsU0FDREMsR0FBQUMsS0FBQUMsRUFBQUMsRUFBQUMsS0FHRFQsUUFBQUMsSUFBQSxpQkFKRUcsSUFnQklBLFFBQUFBLEtBQ0FNLEtBQ0FDLFdBQUFBLFdBR0FDLEtBQUFBLEVBQUFBLEdBV0osWUFSSUEsRUFBZ0IsRUFUbEJSLEtBRUVNLEVBQVVM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QUFVLEVBTWRsRCxFQUFBLFVBSUM0QixHQUhEQyxTQUFBLFNBQUFzQixHQU1BdkMsRUFMa0JILEVBQUFBLEdBQVcwQyxFQUFFQyxhQVc3QnZDLEVBQUFBLEdBQUFBLFFBQWViLFdBQ2ZxQixFQUFBQSxPQUxGNkIsR0FBQSxFQUdFckMsRUFBVU0sWUFBWSxVQUt4Qk4sRUFBU2QsS0FBQUEsR0FDUHNCLFdBQUllLEVBQUFBLE1BMkJGLElBQUF0QixHQUFBLEdBdUNELFdBRUZaLFFBQUFDLElBQUEsZ0JBQ0R5QixFQUFBQyxTQUFBLFNBQUFzQixHQUNBRSxFQUFBQSxLQUFBQSxFQUFBQSxVQU5JbkQsUUFBUUMsSUFBSTJCLEdBUVpLLFFBU0YsSUFBQUEsR0FBTUUsRUFBK0VILEVBQVNELENBc0Q5Rk8sR0FBQUEsR0FBU2MsUUFBVCxXQUNBaEIsRUFBU2IsRUFYWFcsRUFBQS9CLEVBck9GRSxLQXlPSXVCLEtBQ0FvQixHQUFVLEVBQ1ZuRCxJQUNBb0MsRUFBUyxFQUNURCxFQUFRLEVBQ1JyQixFQUFVRSxLQUFLLElBQ2Z5QixFQUFTYyxPQUNUaEIsRUFBU2IsU0FBUyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKCgpID0+IHtcbiAgY29uc29sZS5sb2coJ0pTIHlvJyk7XG5cbiAgY29uc3QgJGRvY3VtZW50ID0gJChkb2N1bWVudCk7XG4gIGNvbnN0IGF1ZGlvID0gJCgnYXVkaW8nKVswXTtcbiAgY29uc3QgJHdlbGNvbWUgPSAkKCcud2VsY29tZScpO1xuICBjb25zdCAkZ2FtZSA9ICQoJyNnYW1lJyk7XG4gIGNvbnN0ICRmZWVkYmFjayA9ICQoJy5mZWVkYmFjaycpO1xuICBjb25zdCAkcmVzZXQgPSAkKCcucmVzZXQnKTtcbiAgY29uc3QgJGVuZEdhbWUgPSAkKCcuZW5kZ2FtZScpXG5cbiAgY29uc3Qgc291bmRzID0gWzQ5LCA1MCwgNTEsIDUyLCA1MywgNTQsIDU1LCA1Nl07XG5cblxuICBjb25zdCB2aXN1YWxzID0ge1xuICAgIDQ5OiB7XG4gICAgICBlbGVtZW50OiAkKCcuZmlyc3QnKSxcbiAgICAgIGFuaW1hdGlvbkluOiAnZmFkZUluRG93bkJpZycsXG4gICAgICBhbmltYXRpb25PdXQ6ICd6b29tT3V0JyxcbiAgICAgIGF1ZGlvOiA0OVxuICAgIH0sXG4gICAgNTA6IHtcbiAgICAgIGVsZW1lbnQ6ICQoJy5zZWNvbmQnKSxcbiAgICAgIGFuaW1hdGlvbkluOiAnem9vbUluJyxcbiAgICAgIGFuaW1hdGlvbk91dDogJ2ZhZGVPdXQnLFxuICAgICAgYXVkaW86IDUwXG4gICAgfSxcbiAgICA1MToge1xuICAgICAgZWxlbWVudDogJCgnLnRoaXJkJyksXG4gICAgICBhbmltYXRpb25JbjogJ2ZsYXNoJyxcbiAgICAgIGFuaW1hdGlvbk91dDogJ2ZhZGVPdXQnLFxuICAgICAgYXVkaW86IDUxXG4gICAgfSxcbiAgICA1Mjoge1xuICAgICAgZWxlbWVudDogJCgnLmZvdXJ0aCcpLFxuICAgICAgYW5pbWF0aW9uSW46ICdyb3RhdGVJbicsXG4gICAgICBhbmltYXRpb25PdXQ6ICdyb3RhdGVPdXQnLFxuICAgICAgYXVkaW86IDUyXG4gICAgfSxcbiAgICA1Mzoge1xuICAgICAgZWxlbWVudDogJCgnLmZpZnRoJyksXG4gICAgICBhbmltYXRpb25JbjogJ2ZsYXNodHdvJyxcbiAgICAgIGFuaW1hdGlvbk91dDogJ2ZhZGVPdXQnLFxuICAgICAgYXVkaW86IDUzXG4gICAgfSxcbiAgICA1NDoge1xuICAgICAgZWxlbWVudDogJCgnLnNpeHRoJyksXG4gICAgICBhbmltYXRpb25JbjogJ2ZhZGVJblVwQmlnJyxcbiAgICAgIGFuaW1hdGlvbk91dDogJ2xpZ2h0U3BlZWRPdXQnLFxuICAgICAgYXVkaW86IDU0XG4gICAgfSxcbiAgICA1NToge1xuICAgICAgZWxlbWVudDogJCgnLnNldmVudGgnKSxcbiAgICAgIGFuaW1hdGlvbkluOiAnc2hha2UnLFxuICAgICAgYW5pbWF0aW9uT3V0OiAnZmFkZU91dCcsXG4gICAgICBhdWRpbzogNTVcbiAgICB9LFxuICAgIDU2OiB7XG4gICAgICBlbGVtZW50OiAkKCcuZWlnaHRoJyksXG4gICAgICBhbmltYXRpb25JbjogJ3NsaWRlSW5MZWZ0JyxcbiAgICAgIGFuaW1hdGlvbk91dDogJ2ZhZGVPdXQnLFxuICAgICAgYXVkaW86IDU2XG4gICAgfVxuXG4gIH07XG5cbiAgLy8gY3VycmVudCByb3VuZC4gZW1wdHkgcHJvZ3JhbVNlcXVlbmNlIGFycmF5LFxuICAvL2dldHMgZmlsbGVkIHgzIGF0IHN0YXJ0IHRoZW4gaXMgKzEgcGVyIHJvdW5kIFxuXG5cbiAgbGV0IGN1cnJlbnRSb3VuZCA9IDM7XG4gIGxldCBjdXJyZW50UGxheWVyTnVtID0gY3VycmVudFJvdW5kO1xuXG5cbiAgbGV0IHByb2dyYW1TZXF1ZW5jZSA9IFtdO1xuICBsZXQgdXNlclNlcXVlbmNlID0gW107XG4gIGxldCBudW1Db2RlID0gbnVsbDtcblxuXG4gIC8vUGxheWluZyB5ZXMvIG5vIHN3aXRjaFxuICBsZXQgcGxheWluZyA9IGZhbHNlO1xuXG5cbiAgbGV0IGN1cnJlbnRQbGF5ZXIgPSAncGxheWVyIDEnO1xuXG5cbiAgLy9hc3NpZ25zIHRoZSBhdWRpbyBzcmMgYWNjb3JkaW5nIHRvIGtleXByZXNzIGlkIG9mIGtleXMgMS04LlxuICAkZG9jdW1lbnQua2V5cHJlc3MoZnVuY3Rpb24oZSkge1xuICAgIGNvbnN0IHBhdHRlcm4gPSB2aXN1YWxzW2Ake2UuY2hhckNvZGV9YF07XG4gICAgdmlzdWFsaXNlKHBhdHRlcm4pO1xuICB9KTtcblxuXG4gIC8vc3dpdGNoZXMgcGxheWluZyB2YXIgdG8gdHJ1ZSBhbmQgaW5pdGlhbHplcyB0aGUgZ2FtZSA6KVxuICAvL2hpZGVzIHRoZSB3ZWxjb21lIGRpdlxuICAkZ2FtZS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgJHdlbGNvbWUuaGlkZSgpO1xuICAgIHBsYXlpbmcgPSB0cnVlO1xuICAgICRmZWVkYmFjay5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgJGZlZWRiYWNrLmh0bWwoY3VycmVudFBsYXllcik7XG4gICAgc2V0VGltZW91dChnYW1lSW5pdCwgMzAwMCk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZVBsYXllciAoKSB7XG4gICAgaWYgKGN1cnJlbnRQbGF5ZXJOdW0gJSAyID09PSAwKSB7XG4gICAgICBjdXJyZW50UGxheWVyID0gJ1BsYXllciAyJztcbiAgICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRSb3VuZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnRQbGF5ZXIgPSAnUGxheWVyIDEnO1xuICAgIH1cbiAgfVxuICAvL2luaXRpYWxpemVzIHRoZSBidWlsZGluZyBvZiB0aGUgcHJvZ3JhbSBhcnJheVxuICBmdW5jdGlvbiBnYW1lSW5pdCAoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50Um91bmQ7IGkrKyl7XG4gICAgICBjb25zdCByYW5kID0gKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo4KSk7XG4gICAgICBwcm9ncmFtU2VxdWVuY2UucHVzaCh2aXN1YWxzW3NvdW5kc1tyYW5kXV0pO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnaW5pdGlhbGl6aW5nIScpO1xuICAgIHBsYXlCYWNrKCk7XG4gIH1cblxuXG4gIC8vIGhlcmUgZG9lcyB0aGVyZSBuZWVkIHRvIGJlIGEgZ2FtZSBhZGQgcmFuZG9tIGFkZGl0aW9uIHRvIGFycmF5IE9SIGEgd2F5IG9mIHVzaW5nIHRoZSBhYm92ZSBmdW5jdGlvbiBqdXN0IHRvIGFkZCBvbmU/XG5cbiAgLy90aGlzIHBsYXlzIGJhY2sgdGhlIGNvbnN0cnVjdGVkIHByb2dyYW0gYXJyYXlcbiAgbGV0IHNlcXVlbmNlSW5kZXggPSAwO1xuXG5cbiAgZnVuY3Rpb24gcGxheUJhY2soKSB7XG4gICAgdXNlclNlcXVlbmNlID0gW107XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBhdWRpby5zcmMgPSBgYXVkaW8vJHtwcm9ncmFtU2VxdWVuY2Vbc2VxdWVuY2VJbmRleF0uYXVkaW99LndhdmA7XG4gICAgICAvLyBhdWRpby5wbGF5KCk7XG4gICAgICBpZiAoc2VxdWVuY2VJbmRleCA8IGN1cnJlbnRSb3VuZCkge1xuICAgICAgICBwbGF5QmFjaygpO1xuICAgICAgICB2aXN1YWxpc2UocHJvZ3JhbVNlcXVlbmNlW3NlcXVlbmNlSW5kZXhdKTtcbiAgICAgICAgJGZlZWRiYWNrLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAgICAgJGZlZWRiYWNrLmh0bWwoY3VycmVudFBsYXllcik7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2dyYW1TZXF1ZW5jZVtzZXF1ZW5jZUluZGV4XS5hdWRpbyk7XG4gICAgICAgIHNlcXVlbmNlSW5kZXgrKztcbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgc2VxdWVuY2VJbmRleCA9IDA7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0sIDEwMDApO1xuICB9XG5cbiAgZnVuY3Rpb24gdmlzdWFsaXNlIChwYXR0ZXJuKSB7XG4gICAgLy8gY29uc3QgcGF0dGVybiA9IHZpc3VhbHNbaV07XG4gICAgJGZlZWRiYWNrLmh0bWwoY3VycmVudFBsYXllcik7XG4gICAgYXVkaW8uc3JjID0gYGF1ZGlvLyR7cGF0dGVybi5hdWRpb30ud2F2YDtcbiAgICBhdWRpby5wbGF5KCk7XG4gICAgY29uc3QgJGVsZW1lbnQgPSBwYXR0ZXJuLmVsZW1lbnQuY2xvbmUoKTtcbiAgICAkZWxlbWVudC5hcHBlbmRUbygnbWFpbicpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKS5hZGRDbGFzcyhwYXR0ZXJuLmFuaW1hdGlvbkluKS5yZW1vdmVDbGFzcyhwYXR0ZXJuLmFuaW1hdGlvbk91dCk7XG4gICAgc2V0VGltZW91dCggKCkgPT4ge1xuICAgICAgJGVsZW1lbnQucmVtb3ZlQ2xhc3MocGF0dGVybi5hbmltYXRpb25JbikuYWRkQ2xhc3MocGF0dGVybi5hbmltYXRpb25PdXQpO1xuICAgIH0sIDEyMDApO1xuICAgIHNldFRpbWVvdXQoICgpID0+IHtcbiAgICAgICRlbGVtZW50LnJlbW92ZSgpO1xuICAgIH0sIDE5MDApO1xuICB9XG4gIC8vRnVuY3Rpb24gcHVzaGVzIGtleSBjaGFyY29kZXMgdGhlIHVzZXIgaW5wdXRzIHRvIHRoZSB1c2VyU2VxdWVuY2UgYXJyYXkuXG4gIGZ1bmN0aW9uIGxpc3RlbigpIHtcbiAgICBjb25zb2xlLmxvZygnbGlzdGVuaW5nLi4uJyk7XG4gICAgJGRvY3VtZW50LmtleXByZXNzKGZ1bmN0aW9uKGUpIHtcbiAgICAgIHVzZXJTZXF1ZW5jZS5wdXNoKGUuY2hhckNvZGUpO1xuICAgICAgY29uc29sZS5sb2codXNlclNlcXVlbmNlKTtcbiAgICAgIGNvbXBhcmVBcnJheXMoKTtcbiAgICB9KTtcblxuICB9XG4gIC8vXG4gIGxpc3RlbigpO1xuXG4gIGxldCBsb3NzZXMgPSAwO1xuICBsZXQgY291bnQgID0gMDtcblxuXG5cbiAgLy8gY29tcGFyZXMgdGhlIHR3byBhcnJheXMgd2hlbiB0aGUgbGVuZ3RoIG1hdGNoZXMgdGhlIGN1cnJlbnQgcm91bmQuXG4gIC8vIG5vdCBzdXBlciBzaWNrLGNvdWxkbnQgZ2V0IGl0IHN0b3AgdHJpZ2dlcmluZyBvbiBldmVyeSBrZXlwcmVzc1xuICAvLyBpZiBwbGF5ZXIgcGFzc2VzIHRlc3QgKzEgaXMgYWRkZWQgdG8gcm91bmQgbGVuZ3RoIGFuZCBwbGF5YmFjayBzdGFydHMgYWdhaW4uXG4gIGZ1bmN0aW9uIGNvbXBhcmVBcnJheXMoKSB7XG4gICAgY29uc3QgdGhlU2FtZSA9IHVzZXJTZXF1ZW5jZS5sZW5ndGggPT09IHByb2dyYW1TZXF1ZW5jZS5sZW5ndGggJiYgdXNlclNlcXVlbmNlLmV2ZXJ5KCh2LGkpID0+IHYgPT09IHByb2dyYW1TZXF1ZW5jZVtpXS5hdWRpbyk7XG4gICAgY291bnQgKz0gMTtcbiAgICBpZiAoKGNvdW50ID09PSBjdXJyZW50Um91bmQpICYmIChsb3NzZXMgPT09IDApKXtcbiAgICAgIGNvbnNvbGUubG9nKHRoZVNhbWUpO1xuICAgICAgaWYgKHRoZVNhbWUgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3QgcmFuZCA9IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqOCkpO1xuICAgICAgICBwcm9ncmFtU2VxdWVuY2UucHVzaCh2aXN1YWxzW3NvdW5kc1tyYW5kXV0pO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9ncmFtU2VxdWVuY2UpO1xuICAgICAgICB1c2VyU2VxdWVuY2UgPSBbXTtcbiAgICAgICAgY291bnQgPSAwO1xuICAgICAgICBjdXJyZW50Um91bmQgKz0gMTtcbiAgICAgICAgY3VycmVudFBsYXllck51bSArPSAxO1xuICAgICAgICB1cGRhdGVQbGF5ZXIoKTtcbiAgICAgICAgJGZlZWRiYWNrLmh0bWwoJ1Bhc3MhIC0gbmV4dCB1cCAnICsgY3VycmVudFBsYXllcik7XG4gICAgICAgICRmZWVkYmFjay5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgICAgIHNldFRpbWVvdXQocGxheUJhY2ssIDMwMDApO1xuICAgICAgfSBlbHNlIGlmICh0aGVTYW1lID09PSBmYWxzZSkge1xuICAgICAgICB1c2VyU2VxdWVuY2UgPSBbXTtcbiAgICAgICAgY291bnQgPSAwO1xuICAgICAgICBsb3NzZXMgKz0gMTtcbiAgICAgICAgY3VycmVudFBsYXllck51bSArPSAxO1xuICAgICAgICBzZXRUaW1lb3V0KHBsYXlCYWNrLCAzMDAwKTtcbiAgICAgICAgdXBkYXRlUGxheWVyKCk7XG4gICAgICAgICRmZWVkYmFjay5odG1sKCdGYWlsISBzdWRkZW4gZGVhdGghISAtbmV4dCB1cCAnICsgY3VycmVudFBsYXllcik7XG4gICAgICAgICRmZWVkYmFjay5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG5cblxuXG4gICAgICAgIC8vdGhpcyBib3R0b20gcGFydCBvZiB0aGUgaWYgZWxzZSBhY3RzIGFzIHRoZSBzdWRkZW4gZGVhdGggY2FsY3VsYXRvciBwb3J0aW9uIG9mIHRoZSBnYW1lLCB3b3JrcyBvbiB3aGV0aGVyIGEgbG9zcyB3YXMgc3RvcmVkIGluIHRoZSAnbG9zc2VzJyB2YXIuXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICgoY291bnQgPT09IGN1cnJlbnRSb3VuZCkgJiYgKGxvc3NlcyAhPT0gMCkpe1xuICAgICAgaWYgKHRoZVNhbWUgPT09IHRydWUpIHtcbiAgICAgICAgJGZlZWRiYWNrLmh0bWwoY3VycmVudFBsYXllciArICcgV2lucyEnKTtcbiAgICAgICAgJGZlZWRiYWNrLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAgICAgJHJlc2V0LnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAgIH0gZWxzZSBpZiAodGhlU2FtZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgJGZlZWRiYWNrLmh0bWwoY3VycmVudFBsYXllciArICcgRmFpbHMhISAtLS0tIFRJRSEnKTtcbiAgICAgICAgJGZlZWRiYWNrLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAgICAgJGVuZEdhbWUucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJGVuZEdhbWUub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgIGN1cnJlbnRSb3VuZCA9IDM7XG4gICAgY3VycmVudFBsYXllck51bSA9IGN1cnJlbnRSb3VuZDtcbiAgICBwcm9ncmFtU2VxdWVuY2UgPSBbXTtcbiAgICB1c2VyU2VxdWVuY2UgPSBbXTtcbiAgICBwbGF5aW5nID0gZmFsc2U7XG4gICAgdXBkYXRlUGxheWVyKCk7XG4gICAgbG9zc2VzID0gMDtcbiAgICBjb3VudCA9IDA7XG4gICAgJGZlZWRiYWNrLmh0bWwoJycpO1xuICAgICR3ZWxjb21lLnNob3coKTtcbiAgICAkZW5kR2FtZS5hZGRDbGFzcygnaGlkZGVuJyk7XG4gIH0pO1xuXG5cbn0pO1xuIl19
