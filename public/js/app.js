"use strict";$(function(){function e(){P=[],M=[],T=3,w=T,l(),D=0,F=0,b="Player 1"}function n(e){if((z||x)&&k[e.key]){var n=k[e.key],t=e.key;s(n),P.push(parseInt(e.key)),y.removeClass("hiddener"),y.html(t),setTimeout(a,500),d()}}function t(e){y.removeClass("hiddener"),y.html(e),setTimeout(a,500)}function a(){y.addClass("hiddener")}function i(){for(var e=0;e<T;e++){var n=Math.floor(8*Math.random());M.push(k[g[n]])}o()}function o(){setTimeout(function(){B<T?(s(M[B]),O.addClass("hidden"),O.html(b),o(),B++):(B=0,r.keypress(n))},1e3)}function s(e){c.src="src/assets/audio/"+e.audio+".wav",c.play(),t(e.audio);var n=e.element.clone();n.appendTo("main").removeClass("hidden").addClass(e.animationIn).removeClass(e.animationOut),setTimeout(function(){n.removeClass(e.animationIn).addClass(e.animationOut)},1200),setTimeout(function(){n.remove()},1900)}function d(){var e=P.length===M.length&&P.every(function(e,n){return e===M[n].audio});F+=1,F===T&&0===D&&z?(console.log(e),e?(T+=1,u(),m(),O.html("Pass! - next up "+b),O.removeClass("hidden"),h(),setTimeout(o,3e3)):e||(D+=1,m(),h(),setTimeout(o,3e3),O.html("Fail! sudden death!! -next up "+b),O.removeClass("hidden"))):F===T&&0!==D&&(e?(O.html(b+" Wins!"),O.removeClass("hidden"),p.removeClass("hidden")):e||(O.html(b+" Fails!! ---- TIE!"),O.removeClass("hidden"),p.removeClass("hidden")))}function u(){var e=Math.floor(8*Math.random());M.push(k[g[e]])}function m(){P=[],F=0,w+=1,l()}function l(){b=w%2==0?"Player 2":"Player 1"}function h(){r.unbind("keypress",n)}console.log("JS yo");var r=$(document),c=$("audio")[0],f=$(".welcome"),v=$("#game"),C=$("#playground"),O=$(".feedback"),p=$(".endgame"),I=$(".switch"),y=$(".numberDisplay"),g=[1,2,3,4,5,6,7,8],k={1:{element:$(".first"),animationIn:"fadeInDownBig",animationOut:"zoomOut",audio:1},2:{element:$(".second"),animationIn:"zoomIn",animationOut:"fadeOut",audio:2},3:{element:$(".third"),animationIn:"flash",animationOut:"fadeOut",audio:3},4:{element:$(".fourth"),animationIn:"rotateIn",animationOut:"rotateOut",audio:4},5:{element:$(".fifth"),animationIn:"flashtwo",animationOut:"fadeOut",audio:5},6:{element:$(".sixth"),animationIn:"fadeInUpBig",animationOut:"lightSpeedOut",audio:6},7:{element:$(".seventh"),animationIn:"shake",animationOut:"fadeOut",audio:7},8:{element:$(".eighth"),animationIn:"slideInLeft",animationOut:"fadeOut",audio:8}},T=3,w=T,M=[],P=[],b="player 1",x=!1,z=!1;v.on("click",function(){f.hide(),z=!0,x=!1,e(),O.removeClass("hidden"),O.html(b),setTimeout(i,3e3)}),C.on("click",function(){f.hide(),x=!0,z=!1,p.removeClass("hidden"),e(),r.keypress(n)}),I.on("change",function(){console.log("checked"),y.toggleClass("hidden")});var B=0,D=0,F=0;p.on("click",function(){z=!1,x=!1,D=0,F=0,O.html(""),f.show(),p.addClass("hidden"),h()})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyIkIiwiYnVpbGRHYW1lIiwidXNlclNlcXVlbmNlIiwicHJvZ3JhbVNlcXVlbmNlIiwiY3VycmVudFJvdW5kIiwiY3VycmVudFBsYXllck51bSIsInVwZGF0ZVBsYXllciIsImxvc3NlcyIsImNvdW50Iiwia2V5TGlzdGVuZXIiLCJlIiwicGxheWluZyIsInZpc3VhbHMiLCJrZXkiLCJtZXNzaW5nIiwidmlzdWFsaXNlIiwic2tleSIsInB1c2giLCJwYXJzZUludCIsIiRudW1iZXJEaXNwbGF5IiwicmVtb3ZlQ2xhc3MiLCJzZXRUaW1lb3V0IiwiZWFzeVBsYXkiLCJodG1sIiwiaGlkZUtleSIsImFkZENsYXNzIiwiZ2FtZUluaXQiLCJyYW5kIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic291bmRzIiwicGxheUJhY2siLCJzZXF1ZW5jZUluZGV4IiwiJGZlZWRiYWNrIiwiY3VycmVudFBsYXllciIsIiRkb2N1bWVudCIsImtleXByZXNzIiwiYXVkaW8iLCJzcmMiLCJwbGF5IiwiJGVsZW1lbnQiLCJlbGVtZW50IiwiYW5pbWF0aW9uSW4iLCJhbmltYXRpb25PdXQiLCJyZW1vdmUiLCJ0aGVTYW1lIiwibGVuZ3RoIiwiZXZlcnkiLCJ2IiwiaSIsImNvbnNvbGUiLCJyb3VuZEFkZE1hdGgiLCJyb3VuZFJlc2V0Iiwic3RvcEJpbmQiLCJ1bmJpbmQiLCJsb2ciLCJkb2N1bWVudCIsIiR3ZWxjb21lIiwiJGdhbWUiLCIkcGxheWdyb3VuZCIsIiRlbmRHYW1lIiwiJHN3aXRjaCIsIjEiLCJvbiIsImhpZGUiLCJ0b2dnbGVDbGFzcyIsInNob3ciXSwibWFwcGluZ3MiOiJZQUFBQSxHQUFFLFdBa0dBLFFBQUFDLEtBQ0FDLEtBQ0VBLEtBQ0FDLEVBQUFBLEVBQ0FDLEVBQUFBLEVBQ0FDLElBQ0FDLEVBQUFBLEVBQ0FDLEVBQUFBLEVBQ0FDLEVBQUEsV0FJRixRQUFBQyxHQUFBQyxHQUNBLElBQUFDLEdBQVNGLElBQWVHLEVBQUFG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R0FBZ0IsRUFtQ2hCekIsRUFBSixFQUFJQSxFQUFTLENBbUVicUQsR0FBU0csR0FBRyxRQUFTLFdBQ25CckQsR0FBVSxFQUNWRyxHQUFVLEVBQ1ZQLEVBQVMsRUFDVEMsRUFBUSxFQUNSMEIsRUFBVVgsS0FBSyxJQUNmbUMsRUFBU1MsT0FDVE4sRUFBU3BDLFNBQVMsVUFDbEI2QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKCgpID0+IHtcbiAgY29uc29sZS5sb2coJ0pTIHlvJyk7XG4gIGNvbnN0ICRkb2N1bWVudCA9ICQoZG9jdW1lbnQpO1xuICBjb25zdCBhdWRpbyA9ICQoJ2F1ZGlvJylbMF07XG4gIGNvbnN0ICR3ZWxjb21lID0gJCgnLndlbGNvbWUnKTtcbiAgY29uc3QgJGdhbWUgPSAkKCcjZ2FtZScpO1xuICBjb25zdCAkcGxheWdyb3VuZCA9ICQoJyNwbGF5Z3JvdW5kJyk7XG4gIGNvbnN0ICRmZWVkYmFjayA9ICQoJy5mZWVkYmFjaycpO1xuICBjb25zdCAkZW5kR2FtZSA9ICQoJy5lbmRnYW1lJyk7XG4gIGNvbnN0ICRzd2l0Y2ggPSAkKCcuc3dpdGNoJyk7XG4gIGNvbnN0ICRudW1iZXJEaXNwbGF5ID0gJCgnLm51bWJlckRpc3BsYXknKTtcbiAgY29uc3Qgc291bmRzID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDhdO1xuICBjb25zdCB2aXN1YWxzID0ge1xuICAgIDE6IHtcbiAgICAgIGVsZW1lbnQ6ICQoJy5maXJzdCcpLFxuICAgICAgYW5pbWF0aW9uSW46ICdmYWRlSW5Eb3duQmlnJyxcbiAgICAgIGFuaW1hdGlvbk91dDogJ3pvb21PdXQnLFxuICAgICAgYXVkaW86IDFcbiAgICB9LFxuICAgIDI6IHtcbiAgICAgIGVsZW1lbnQ6ICQoJy5zZWNvbmQnKSxcbiAgICAgIGFuaW1hdGlvbkluOiAnem9vbUluJyxcbiAgICAgIGFuaW1hdGlvbk91dDogJ2ZhZGVPdXQnLFxuICAgICAgYXVkaW86IDJcbiAgICB9LFxuICAgIDM6IHtcbiAgICAgIGVsZW1lbnQ6ICQoJy50aGlyZCcpLFxuICAgICAgYW5pbWF0aW9uSW46ICdmbGFzaCcsXG4gICAgICBhbmltYXRpb25PdXQ6ICdmYWRlT3V0JyxcbiAgICAgIGF1ZGlvOiAzXG4gICAgfSxcbiAgICA0OiB7XG4gICAgICBlbGVtZW50OiAkKCcuZm91cnRoJyksXG4gICAgICBhbmltYXRpb25JbjogJ3JvdGF0ZUluJyxcbiAgICAgIGFuaW1hdGlvbk91dDogJ3JvdGF0ZU91dCcsXG4gICAgICBhdWRpbzogNFxuICAgIH0sXG4gICAgNToge1xuICAgICAgZWxlbWVudDogJCgnLmZpZnRoJyksXG4gICAgICBhbmltYXRpb25JbjogJ2ZsYXNodHdvJyxcbiAgICAgIGFuaW1hdGlvbk91dDogJ2ZhZGVPdXQnLFxuICAgICAgYXVkaW86IDVcbiAgICB9LFxuICAgIDY6IHtcbiAgICAgIGVsZW1lbnQ6ICQoJy5zaXh0aCcpLFxuICAgICAgYW5pbWF0aW9uSW46ICdmYWRlSW5VcEJpZycsXG4gICAgICBhbmltYXRpb25PdXQ6ICdsaWdodFNwZWVkT3V0JyxcbiAgICAgIGF1ZGlvOiA2XG4gICAgfSxcbiAgICA3OiB7XG4gICAgICBlbGVtZW50OiAkKCcuc2V2ZW50aCcpLFxuICAgICAgYW5pbWF0aW9uSW46ICdzaGFrZScsXG4gICAgICBhbmltYXRpb25PdXQ6ICdmYWRlT3V0JyxcbiAgICAgIGF1ZGlvOiA3XG4gICAgfSxcbiAgICA4OiB7XG4gICAgICBlbGVtZW50OiAkKCcuZWlnaHRoJyksXG4gICAgICBhbmltYXRpb25JbjogJ3NsaWRlSW5MZWZ0JyxcbiAgICAgIGFuaW1hdGlvbk91dDogJ2ZhZGVPdXQnLFxuICAgICAgYXVkaW86IDhcbiAgICB9XG5cbiAgfTtcblxuICAvLyBjdXJyZW50IHJvdW5kLiBlbXB0eSBwcm9ncmFtU2VxdWVuY2UgYXJyYXksXG4gIC8vZ2V0cyBmaWxsZWQgeDMgYXQgc3RhcnQgdGhlbiBpcyArMSBwZXIgcm91bmRcbiAgbGV0IGN1cnJlbnRSb3VuZCA9IDM7XG4gIGxldCBjdXJyZW50UGxheWVyTnVtID0gY3VycmVudFJvdW5kO1xuICBsZXQgcHJvZ3JhbVNlcXVlbmNlID0gW107XG4gIGxldCB1c2VyU2VxdWVuY2UgPSBbXTtcbiAgbGV0IGN1cnJlbnRQbGF5ZXIgPSAncGxheWVyIDEnO1xuXG4gIC8vUGxheWluZy9tZXNzaW5nIG1vZGUgdmFycyBmb3IgZ2FtZSBvciBwbGF5Z3JvdW5kXG4gIGxldCBtZXNzaW5nID0gZmFsc2U7XG4gIGxldCBwbGF5aW5nID0gZmFsc2U7XG5cbiAgLy9nYW1lIGJ1dHRvbiBjbGljayBmdW5jdGlvbi0gc2hvd3MgY3VycmVudCBwbGF5ZXIsIHN3aXRjaGVzIHBsYXlpbmcgdG8gdHJ1ZSBhbmQgIGxhdW5jaGVzIHRoZSBrZXkgbGlzdGVuZXIgYW5kIHRoZSBidWlsZGdhbWUgZnVuY3Rpb24uXG4gICRnYW1lLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAkd2VsY29tZS5oaWRlKCk7XG4gICAgcGxheWluZyA9IHRydWU7XG4gICAgbWVzc2luZyA9IGZhbHNlO1xuICAgIGJ1aWxkR2FtZSgpO1xuICAgICRmZWVkYmFjay5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgJGZlZWRiYWNrLmh0bWwoY3VycmVudFBsYXllcik7XG4gICAgc2V0VGltZW91dChnYW1lSW5pdCwgMzAwMCk7XG4gIH0pO1xuXG4gIC8vcGxheWdyb3VuZCBidXR0b24ga2V5IGxpc3RlbmVyLlxuICAkcGxheWdyb3VuZC5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgJHdlbGNvbWUuaGlkZSgpO1xuICAgIG1lc3NpbmcgPSB0cnVlO1xuICAgIHBsYXlpbmcgPSBmYWxzZTtcbiAgICAkZW5kR2FtZS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgYnVpbGRHYW1lKCk7XG4gICAgJGRvY3VtZW50LmtleXByZXNzKGtleUxpc3RlbmVyKTtcblxuICB9KTtcblxuICAvL3NldHMgdGhlIGdhbWUgYm9hcmQgdXAgYXMgaXQgc2hvdWxkIGJlIGF0IHRoZSBiZWdpbm5pbmcgb2Ygcm91bmQtIGVzcGVjaWFsbHkgbWF0dGVycyBhZnRlciB0aGUgcmVzZXQgaXMgcHJlc3NlZC5cbiAgZnVuY3Rpb24gYnVpbGRHYW1lKCkge1xuICAgIHVzZXJTZXF1ZW5jZSA9IFtdO1xuICAgIHByb2dyYW1TZXF1ZW5jZSA9IFtdO1xuICAgIGN1cnJlbnRSb3VuZCA9IDM7XG4gICAgY3VycmVudFBsYXllck51bSA9IGN1cnJlbnRSb3VuZDtcbiAgICB1cGRhdGVQbGF5ZXIoKTtcbiAgICBsb3NzZXMgPSAwO1xuICAgIGNvdW50ID0gMDtcbiAgICBjdXJyZW50UGxheWVyID0gJ1BsYXllciAxJztcbiAgfVxuXG4gIC8vYWN0aXZhdGVzIHRoZSBrZXkgbGlzdGVuZXIgZnVuY3Rpb24gd2hlbiBjYWxsZWQgYW5kIGF0dGFjaGVkIHRvIHRoZSBkb2N1bWVudCBmcm9tIHRoZSBnYW1lL3BsYXlncm91bmQgYnV0dG9ucy4gdGhlbiBwdXNoZXMgdGhlIGtleSBjb2RlICgxLTgpIGRvd24gdG8gdGhlIHZpc3VhbGlzZSBmdW5jdGlvbiBhbmQgbnVtYmVyRGlzcGxheSBlbGVtZW50KGZvciB0aGUgZWFzeSBtb2RlKS5cbiAgZnVuY3Rpb24ga2V5TGlzdGVuZXIoZSkge1xuICAgIGlmICgocGxheWluZyB8fCBtZXNzaW5nKSAmJiB2aXN1YWxzW2Uua2V5XSkge1xuICAgICAgY29uc3Qga2V5ID0gdmlzdWFsc1tlLmtleV07XG4gICAgICBjb25zdCBza2V5ID0gZS5rZXk7XG4gICAgICB2aXN1YWxpc2Uoa2V5KTtcbiAgICAgIHVzZXJTZXF1ZW5jZS5wdXNoKHBhcnNlSW50KGUua2V5KSk7XG4gICAgICAkbnVtYmVyRGlzcGxheS5yZW1vdmVDbGFzcygnaGlkZGVuZXInKTtcbiAgICAgICRudW1iZXJEaXNwbGF5Lmh0bWwoc2tleSk7XG4gICAgICBzZXRUaW1lb3V0KGhpZGVLZXksIDUwMCk7XG4gICAgICBjb21wYXJlQXJyYXlzKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gYWN0aXZhdGVzIHRoZSBoYXJkIG1vZGUgd2hlbiBidXR0b24gaXMgY2hlY2tlZCwgcmVtb3ZpbmcgdGhlIGxhcmdlIG51bWJlcnNcbiAgJHN3aXRjaC5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdjaGVja2VkJyk7XG4gICAgJG51bWJlckRpc3BsYXkudG9nZ2xlQ2xhc3MoJ2hpZGRlbicpO1xuXG4gIH0pO1xuXG4gIC8vdGhpcyBmdW5jdGlvbiB0YWtlcyB0aGUga2V5cyBwdXNoZWQgZnJvbSB0aGUgdmlzdWFscyBmdW5jdGlvbiBhbmQgdHJhbnNsYXRlcyB0aGVtIGludG8gdGhlIGVhc3ltb2RlIGxhcmdlIG51bWJlcnMgb24gc2NyZWVuXG4gIGZ1bmN0aW9uIGVhc3lQbGF5IChrZXkpIHtcbiAgICAkbnVtYmVyRGlzcGxheS5yZW1vdmVDbGFzcygnaGlkZGVuZXInKTtcbiAgICAkbnVtYmVyRGlzcGxheS5odG1sKGtleSk7XG4gICAgc2V0VGltZW91dChoaWRlS2V5LCA1MDApO1xuXG4gIH1cblxuICAvL2hpZGVzIHRoZSBlYXN5IG51bXMgYWZ0ZXIgdGhlIHRpbWUgZGljdGF0ZWQgaW4gdGhlIGZ1bmN0aW9ucyBhYm92ZS5cbiAgZnVuY3Rpb24gaGlkZUtleSgpIHtcbiAgICAkbnVtYmVyRGlzcGxheS5hZGRDbGFzcygnaGlkZGVuZXInKTtcbiAgfVxuXG4gIC8vaW5pdGlhbGl6ZXMgdGhlIGJ1aWxkaW5nIG9mIHRoZSBwcm9ncmFtIGFycmF5LCBnZW5lcmF0ZXMgYSBudW1iZXIgZnJvbSAxLTggcmFuZG9tbHkgYW5kICozIHRvIGNyZWF0ZSBmaXJzdCBhcnJheS5cbiAgZnVuY3Rpb24gZ2FtZUluaXQgKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFJvdW5kOyBpKyspe1xuICAgICAgY29uc3QgcmFuZCA9IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqOCkpO1xuICAgICAgcHJvZ3JhbVNlcXVlbmNlLnB1c2godmlzdWFsc1tzb3VuZHNbcmFuZF1dKTtcbiAgICB9XG4gICAgcGxheUJhY2soKTtcbiAgfVxuXG4gIC8vYWxsb3dzIHRoZSBzZXF1ZW5jZSB0byByZXN0YXJ0IGFmdGVyIHRoZSBsYXN0IHJvdW5kLCBzdG9wcGluZyBpdCBmcm9tIGp1c3QgcGxheWluZyB0aGUgZW5kIG51bWJlci5cbiAgbGV0IHNlcXVlbmNlSW5kZXggPSAwO1xuXG4gIC8vdGhpcyBwbGF5cyBiYWNrIHRoZSBjb25zdHJ1Y3RlZCBwcm9ncmFtIGFycmF5IGZyb20gc3RhcnQgdG8gZmluaXNoLiBhbHNvIGhpZGVzIHRoZSBjdXJyZW50IHBsYXllciBmZWVkYmFjay4gYW5kIGNvbnNvbGUgbG9ncyB0aGUgcHJvZ3JhbSBzZXEgYXJyYXkgZm9yIGNoZWF0aW5nLlxuICBmdW5jdGlvbiBwbGF5QmFjaygpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChzZXF1ZW5jZUluZGV4IDwgY3VycmVudFJvdW5kKSB7XG4gICAgICAgIHZpc3VhbGlzZShwcm9ncmFtU2VxdWVuY2Vbc2VxdWVuY2VJbmRleF0pO1xuICAgICAgICAkZmVlZGJhY2suYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgICAkZmVlZGJhY2suaHRtbChjdXJyZW50UGxheWVyKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocHJvZ3JhbVNlcXVlbmNlW3NlcXVlbmNlSW5kZXhdLmF1ZGlvKTtcbiAgICAgICAgcGxheUJhY2soKTtcbiAgICAgICAgc2VxdWVuY2VJbmRleCsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VxdWVuY2VJbmRleCA9IDA7XG4gICAgICAgICRkb2N1bWVudC5rZXlwcmVzcyhrZXlMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICAvL3Rha2VzIHRoZSBjb2RlIHB1c2hlZCBkb3duIGZyb20gdGhlIGtleWxpc3RlbmVyIGFuZCB0aGUgcGxheWJhY2sgYW5kIHRyYW5zbGF0ZXMgaXQgdG8gcGxheSB0aGUgYXVkaW8gc3JjIGFuZCBhbmltYXRlIHRoZSBkaXZzIGF0IHRoZSBzYW1lIHRpbWUuIGNsb25lcyB0aGUgcmVsZXZhbnQgZGl2IGFuZCBhcHBlbmRzIGl0IHRvIHRoZSBib2R5IGFsc28sIGFsbG93aW5nIGZvciBvdmVybGFwcy4gdGhlbiBkZWxldGVzIGl0c2VsZiBhZnRlciBuZWFybHkgMiBzZWNzLlxuICBmdW5jdGlvbiB2aXN1YWxpc2UgKGtleSkge1xuICAgIGF1ZGlvLnNyYyA9IGBzcmMvYXNzZXRzL2F1ZGlvLyR7a2V5LmF1ZGlvfS53YXZgO1xuICAgIGF1ZGlvLnBsYXkoKTtcbiAgICBlYXN5UGxheShrZXkuYXVkaW8pO1xuICAgIGNvbnN0ICRlbGVtZW50ID0ga2V5LmVsZW1lbnQuY2xvbmUoKTtcbiAgICAkZWxlbWVudC5hcHBlbmRUbygnbWFpbicpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKS5hZGRDbGFzcyhrZXkuYW5pbWF0aW9uSW4pLnJlbW92ZUNsYXNzKGtleS5hbmltYXRpb25PdXQpO1xuICAgIHNldFRpbWVvdXQoICgpID0+IHtcbiAgICAgICRlbGVtZW50LnJlbW92ZUNsYXNzKGtleS5hbmltYXRpb25JbikuYWRkQ2xhc3Moa2V5LmFuaW1hdGlvbk91dCk7XG4gICAgfSwgMTIwMCk7XG4gICAgc2V0VGltZW91dCggKCkgPT4ge1xuICAgICAgJGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfSwgMTkwMCk7XG4gIH1cblxuICBsZXQgbG9zc2VzID0gMDtcbiAgbGV0IGNvdW50ICA9IDA7XG5cbiAgLy8gY29tcGFyZXMgdGhlIHR3byBhcnJheXMgd2hlbiB0aGUgbGVuZ3RoIG1hdGNoZXMgdGhlIGN1cnJlbnQgcm91bmQuXG4gIC8vIGlmIHBsYXllciBwYXNzZXMgdGVzdCArMSBpcyBhZGRlZCB0byByb3VuZCBsZW5ndGggYW5kIHBsYXliYWNrIHN0YXJ0cyBhZ2Fpbi5cbiAgZnVuY3Rpb24gY29tcGFyZUFycmF5cygpIHtcbiAgICBjb25zdCB0aGVTYW1lID0gdXNlclNlcXVlbmNlLmxlbmd0aCA9PT0gcHJvZ3JhbVNlcXVlbmNlLmxlbmd0aCAmJiB1c2VyU2VxdWVuY2UuZXZlcnkoKHYsaSkgPT4gdiA9PT0gcHJvZ3JhbVNlcXVlbmNlW2ldLmF1ZGlvKTtcbiAgICBjb3VudCArPSAxO1xuICAgIGlmICgoY291bnQgPT09IGN1cnJlbnRSb3VuZCkgJiYgKGxvc3NlcyA9PT0gMCkgJiYgKHBsYXlpbmcpKSB7XG4gICAgICBjb25zb2xlLmxvZyh0aGVTYW1lKTtcbiAgICAgIGlmICh0aGVTYW1lKSB7XG4gICAgICAgIGN1cnJlbnRSb3VuZCArPSAxO1xuICAgICAgICByb3VuZEFkZE1hdGgoKTtcbiAgICAgICAgcm91bmRSZXNldCgpO1xuICAgICAgICAkZmVlZGJhY2suaHRtbCgnUGFzcyEgLSBuZXh0IHVwICcgKyBjdXJyZW50UGxheWVyKTtcbiAgICAgICAgJGZlZWRiYWNrLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAgICAgc3RvcEJpbmQoKTtcbiAgICAgICAgc2V0VGltZW91dChwbGF5QmFjaywgMzAwMCk7XG4gICAgICB9IGVsc2UgaWYgKCF0aGVTYW1lKSB7XG4gICAgICAgIGxvc3NlcyArPSAxO1xuICAgICAgICByb3VuZFJlc2V0KCk7XG4gICAgICAgIHN0b3BCaW5kKCk7XG4gICAgICAgIHNldFRpbWVvdXQocGxheUJhY2ssIDMwMDApO1xuICAgICAgICAkZmVlZGJhY2suaHRtbCgnRmFpbCEgc3VkZGVuIGRlYXRoISEgLW5leHQgdXAgJyArIGN1cnJlbnRQbGF5ZXIpO1xuICAgICAgICAkZmVlZGJhY2sucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgICAvL3RoaXMgYm90dG9tIHBhcnQgb2YgdGhlIGlmIGVsc2UgYWN0cyBhcyB0aGUgc3VkZGVuIGRlYXRoIGNhbGN1bGF0b3IgcG9ydGlvbiBvZiB0aGUgZ2FtZSwgd29ya3Mgb24gd2hldGhlciBhIGxvc3Mgd2FzIHN0b3JlZCBpbiB0aGUgJ2xvc3NlcycgdmFyLlxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoKGNvdW50ID09PSBjdXJyZW50Um91bmQpICYmIChsb3NzZXMgIT09IDApKXtcbiAgICAgIGlmICh0aGVTYW1lKSB7XG4gICAgICAgICRmZWVkYmFjay5odG1sKGN1cnJlbnRQbGF5ZXIgKyAnIFdpbnMhJyk7XG4gICAgICAgICRmZWVkYmFjay5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgICAgICRlbmRHYW1lLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAgIH0gZWxzZSBpZiAoIXRoZVNhbWUpIHtcbiAgICAgICAgJGZlZWRiYWNrLmh0bWwoY3VycmVudFBsYXllciArICcgRmFpbHMhISAtLS0tIFRJRSEnKTtcbiAgICAgICAgJGZlZWRiYWNrLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAgICAgJGVuZEdhbWUucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy9mdW5jdGlvbiBpcyBjYWxsZWQgZnJvbSB0aGUgY29tcGFyZSBhcnJheXMgZnVuY3Rpb24gYW5kIHVwcyB0aGUgcHJvZ3JhbSBhcnJheSBieSAxIHJhbmRvbWx5IGdlbmVyYXRlZCBudW1iZXIuXG4gIGZ1bmN0aW9uIHJvdW5kQWRkTWF0aCAoKSB7XG4gICAgY29uc3QgcmFuZCA9IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqOCkpO1xuICAgIHByb2dyYW1TZXF1ZW5jZS5wdXNoKHZpc3VhbHNbc291bmRzW3JhbmRdXSk7XG4gIH1cblxuICAvLyB0aGlzIHJlc2V0cyB0aGUgcm91bmQgYWZ0ZXIgYSBmaXJzdCB0aW1lIHdpbiBvciBmYWlsLCBhbGxvd2luZyBmb3IgdGhlIGN1cnJlbnQgcGxheWVyIHRvIGNoYW5nZSBidXQgbm90IHRoZSByb3VuZCBudW1iZXIgZm9yIHN1ZGRlbiBkZWF0aC5cbiAgZnVuY3Rpb24gcm91bmRSZXNldCAoKSB7XG4gICAgdXNlclNlcXVlbmNlID0gW107XG4gICAgY291bnQgPSAwO1xuICAgIGN1cnJlbnRQbGF5ZXJOdW0gKz0gMTtcbiAgICB1cGRhdGVQbGF5ZXIoKTtcbiAgfVxuXG4gIC8vdXBkYXRlcyB0aGUgY3VycmVudCBwbGF5ZXIgYXMgdGhlIHJvdW5kcyBpbmNyZWFzZS0gaGFzIHRvIGJlIGN1cnJlbnQgcGxheWVyIG51bSBkdWUgdG8gdGhlIGN1cnJlbnQgcGxheWVyIG5lZWRpbmcgdG8gdXBkYXRlIGluZGVwZW5kZW50bHkgZnJvbSB0aGUgY3VycmVudCByb3VuZCBmb3IgdGhlIHN1ZGRlbiBkZWF0aCByb3VuZFxuICBmdW5jdGlvbiB1cGRhdGVQbGF5ZXIgKCkge1xuICAgIGlmIChjdXJyZW50UGxheWVyTnVtICUgMiA9PT0gMCkge1xuICAgICAgY3VycmVudFBsYXllciA9ICdQbGF5ZXIgMic7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnRQbGF5ZXIgPSAnUGxheWVyIDEnO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHN0b3BCaW5kICgpIHtcbiAgICAkZG9jdW1lbnQudW5iaW5kKCdrZXlwcmVzcycsIGtleUxpc3RlbmVyKTtcbiAgfVxuXG4gICRlbmRHYW1lLm9uKCdjbGljaycsICgpID0+IHtcbiAgICBwbGF5aW5nID0gZmFsc2U7XG4gICAgbWVzc2luZyA9IGZhbHNlO1xuICAgIGxvc3NlcyA9IDA7XG4gICAgY291bnQgPSAwO1xuICAgICRmZWVkYmFjay5odG1sKCcnKTtcbiAgICAkd2VsY29tZS5zaG93KCk7XG4gICAgJGVuZEdhbWUuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgIHN0b3BCaW5kKCk7XG4gIH0pO1xuXG59KTtcblxuXG5cbi8vdG8gZG8gLSBtYWtlIHRoZSBrZXkgbGlzdGVuIG9ubHkgd29yayBvbmNlIHRoZSBrZXkgaGFzIHBsYXllZCBiYWNrXG4vL21hc3NpdmVseSByZWR1Y2UgdGhlIGNvbXBhcmUgYXJyYXlzIGZ1bmN0aW9uLCBtYXliZSBtb3ZlIGFkZCBtYXRoIG91dC5cbiJdfQ==
