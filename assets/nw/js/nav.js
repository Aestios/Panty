$(function(){$('#tabs').css('display','block');$('#tabs').click(function(event){var actuel=event.target;if(!/a/i.test(actuel.nodeName)||actuel.className.indexOf('active')>-1){return;}
$(actuel).addClass('active').siblings().removeClass('active');setDisplay();});function setDisplay(){var modeAffichage;$('#tabs a').each(function(rang){modeAffichage=$(this).hasClass('active')?'':'none';$('.item').eq(rang).css('display',modeAffichage)});}
setDisplay();});$(document).ready(function(){$(".tabItem").each(function(i){this.id="#"+ this.id;});$(".tabItem:not(:first)").hide();$(".tabItem").not(":first").hide();$("#listItem a").click(function(){var idTab=$(this).attr("href");$(".tabItem").hide();$("div[id='"+ idTab+"']").fadeIn();return false;});});