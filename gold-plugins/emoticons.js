/* Emoticons Plugin
 * This is a chat-plugin for an Emoticons system on PS
 * You will need a line in command-parser.js to actually
 * parse this so that it works.  Also, you will need to
 * add a few lines to the PM command (chat.js).
 * Credits: panpawn, jd
 */
'use strict';

const fs = require('fs');
let emotes = {
	'(ditto)': 'https://cdn.betterttv.net/emote/554da1a289d53f2d12781907/2x',
	'#freewolf': 'http://i.imgur.com/ybxWXiG.png',
	'feelsbn': 'http://i.imgur.com/wp51rIg.png',
	'DansGame': 'https://static-cdn.jtvnw.net/emoticons/v1/33/1.0',
	'Doge': 'http://fc01.deviantart.net/fs71/f/2014/279/4/5/doge__by_honeybunny135-d81wk54.png',
	'EleGiggle': 'https://static-cdn.jtvnw.net/emoticons/v1/4339/2.0',
	'FacePalm': 'http://i.imgur.com/lv3GmpM.png',
	'FailFish': 'https://static-cdn.jtvnw.net/emoticons/v1/360/1.0',
	'feelsackbr': 'http://i.imgur.com/BzZJedC.jpg',
	'feelsbebop': 'http://i.imgur.com/TDwC3wL.png',
	'feelsbd': 'http://i.imgur.com/YyEdmwX.png',
	'feelsbirb': 'http://i.imgur.com/o4KxmWe.png',
	'feelsbm': 'http://i.imgur.com/xwfJb2z.png',
	'feelsbt': 'http://i.imgur.com/rghiV9b.png',
	'feelschime': 'http://i.imgur.com/uIIBChH.png',
	'feelscrazy': 'http://i.imgur.com/NiJsT5W.png',
	'feelscool': 'http://i.imgur.com/qdGngVl.jpg',
	'feelscri': 'http://i.imgur.com/QAuUW7u.jpg?1',
	'feelscx': 'http://i.imgur.com/zRSUw2n.gif',
	'feelsdd': 'http://i.imgur.com/fXtdLtV.png',
	'feelsdoge': 'http://i.imgur.com/GklYWvi.png',
	'feelsemo': 'http://i.imgur.com/FPolh5d.jpg',
	'feelsfdra': 'http://i.imgur.com/ZIcl9Zy.jpg',
	'feelsfro': 'http://i.imgur.com/ijJakJT.png',
	'feelsgay': 'http://i.imgur.com/zQAacwu.png',
	'feelsgd': 'http://i.imgur.com/Jf0n4BL.png',
	'feelsgn': 'http://i.imgur.com/juJQh0J.png',
	'feelsgro': 'http://i.imgur.com/jLhP0bZ.png',
	'feelshigh': 'http://i.imgur.com/s9I2bxp.jpg?1',
	'feelshlwn': 'http://i.imgur.com/OHMDVNJ.jpg',
	'feelshp': 'http://i.imgur.com/1W19BDG.png',
	'feelsho': 'http://i.imgur.com/J4oUHm2.png?1',
	'feelsilum': 'http://i.imgur.com/CnyGTTD.png',
	'feelsjig': 'http://i.imgur.com/hSzqy5z.png?1',
	'feelsjpn': 'http://i.imgur.com/Zz2WrQf.jpg',
	'feelskawaii': 'http://i.imgur.com/kLnDaYD.png', 
	'feelsky': 'http://i.imgur.com/BtATPId.png?1',
	'feelslelouch': 'http://i.imgur.com/qZrV75o.png',
	'feelslot': 'http://i.imgur.com/tl88F7i.png?1',
	'feelslu': 'http://i.imgur.com/REEBSOT.png?1',
	'feelsmd': 'http://i.imgur.com/DJHMdSw.png',
	'feelsmixtape': 'http://i.imgur.com/7lncwng.png',
	'feelsnv': 'http://i.imgur.com/XF6kIdJ.png',
	'feelsns': 'http://i.imgur.com/jYRFUYW.jpg',
	'feelsok': 'http://i.imgur.com/gu3Osve.png',
	'feelsorange': 'http://i.imgur.com/3fxXP16.jpg',
	'feelspanda': 'http://i.imgur.com/qi7fue9.png',
	'feelspaul': 'http://imgur.com/KuDZMJR.png',
	'feelsshrk': 'http://i.imgur.com/amTG3jF.jpg',
	'feelspika': 'http://i.imgur.com/mBq3BAW.png',
	'feelsPika': 'http://i.imgur.com/eoTrTkn.png',
	'feelspink': 'http://i.imgur.com/jqfB8Di.png',
	'feelspn': 'http://i.imgur.com/wSSM6Zk.png',
	'feelspoli': 'http://i.imgur.com/FnzhrWa.jpg',
	'feelsPoli': 'http://i.imgur.com/sbKhXZE.jpg',
	'feelsrb': 'http://i.imgur.com/L6ak1Uk.png',
	'feelsrg': 'http://i.imgur.com/DsRQCsI.png',
	'feelsrs': 'http://i.imgur.com/qGEot0R.png',
	'feelssc': 'http://i.imgur.com/cm6oTZ1.png',
	'feelsseis': 'http://i.imgur.com/gGGYxrE.png',
	'feelsshi': 'http://i.imgur.com/VzlGZ1M.jpg',
	'feelsslo': 'http://i.imgur.com/iQuToJf.jpg?1',
	'feelssnake': 'http://i.imgur.com/xoJnDUD.png',
	'feelstea': 'http://i.imgur.com/M0f2zgJ.jpg?1',
	'feelstired': 'http://i.imgur.com/EgYViOs.jpg',
	'feelsdrg': 'http://i.imgur.com/UZzWcA3.png',
	'feelsvolc': 'http://i.imgur.com/QXlKzZd.png?1',
	'feelsvpn': 'http://i.imgur.com/ODTZISl.gif',
	'feelswin': 'http://i.imgur.com/rbs9pZG.png?1',
	'feelswnk': 'http://i.imgur.com/K1GhJaN.png', 
	'funnylol': 'http://i.imgur.com/SlzCghq.png',
	'happyface': 'http://imgur.com/krzCL3j.jpg',
	'hmmface': 'http://i.imgur.com/Z5lOwfZ.png',
	'hypnotoad': 'http://i.imgur.com/lJtbSfl.gif',
	'jcena': 'http://i.imgur.com/hPz30Ol.jpg?2',
	'Kappa': 'http://i.imgur.com/ZxRU4z3.png?1',
	'Kreygasm': 'https://static-cdn.jtvnw.net/emoticons/v1/41/1.0',
	'meGusta': 'http://cdn.overclock.net/3/36/50x50px-ZC-369517fd_me-gusta-me-gusta-s.png',
	'MingLee': 'https://static-cdn.jtvnw.net/emoticons/v1/68856/2.0',
	'noface': 'http://i.imgur.com/H744eRE.png',
	'Obama': 'http://i.imgur.com/rBA9M7A.png',
	'oshet': 'http://i.imgur.com/yr5DjuZ.png',
	'PeoplesChamp': 'http://i.imgur.com/QMiMBKe.png',
	'Sanic': 'http://i.imgur.com/Y6etmna.png',
	'stevo': 'http://imgur.com/Gid6Zjy.png',
	'thumbsup': 'http://i.imgur.com/eWcFLLn.jpg',
	'trollface': 'http://cdn.overclock.net/a/a0/50x50px-ZC-a0e3f9a7_troll-troll-face.png',
	'trumpW': 'https://static-cdn.jtvnw.net/emoticons/v1/35218/1.0',
	'wtfman': 'http://i.imgur.com/kwR8Re9.png',
	'WutFace': 'https://static-cdn.jtvnw.net/emoticons/v1/28087/2.0',
	'xaa': 'http://i.imgur.com/V728AvL.png',
	'xoxo': 'http://orig00.deviantart.net/b49d/f/2014/220/5/3/ichigo_not_impressed_icon_by_magical_icon-d7u92zg.png',
	'yayface': 'http://i.imgur.com/anY1jf8.png',
	'yesface': 'http://i.imgur.com/k9YCF6K.png',
	'youdontsay': 'http://r32.imgfast.net/users/3215/23/26/64/smiles/280467785.jpg',
	'gudone': 'http://i.imgur.com/USkp1b9.png',
	'feelsfloat': 'http://i.imgur.com/XKP1Kpf.gif',
	'feelsarken': 'http://i.imgur.com/YCCDZWq.png',
	'feelsfun': 'http://imgur.com/47aAUMf.png',
	'feelsev': 'http://a.deviantart.net/avatars/b/e/bestusernameever1.gif?4',
	'feelssyl': 'http://orig12.deviantart.net/1171/f/2013/104/9/3/iaza19412987157700_by_tldraco_ful-d61or0c.gif',
	'feelsfl': 'http://orig14.deviantart.net/a05e/f/2016/121/c/e/finsihed_flareon_lick_by_sydneykoren-da0yz5e.gif',
	'feelsalt': 'http://pixelart.virtualslayer.net/albums/userpics/10001/thumb_334_N0_Altaria.png',
	'feelsshinx': 'http://a.deviantart.net/avatars/s/i/silentnightninja.gif?2',
	'feelsjolt': 'http://orig15.deviantart.net/d7b8/f/2011/355/c/b/free_jolteon_lick_icon_by_supersilverabsol-d4ju665.gif',
	'feelschu': 'http://orig13.deviantart.net/2bc9/f/2013/119/a/3/spiky_eared_pichu_lick_icon_commission_by_poke_lover88-d63htrw.gif',
	'fukya': 'http://i.imgur.com/WPeazU8.gif',
	'feelslitten': 'http://a.deviantart.net/avatars/v/i/vixieblitz.gif?15',
	'feelschar': 'https://cdn.betterttv.net/emote/562b9101a6646e202bcc5447/2x',
	'feelssquirt': 'http://orig10.deviantart.net/fc37/f/2013/293/8/7/squirtle_by_creepydana-d6r9oe8.gif',
	'feelsohnoes': 'http://i.imgur.com/w6zbVkN.png',
	'zaa': 'http://i.imgur.com/POEv3rX.png',
	'feelsvape': 'http://i1341.photobucket.com/albums/o752/Ra_Bertumen/vaporeon_zpsc56153aa.png',
	'feelsmuffet': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh20wovaljO2IIENCn2xcNWwG2EftJQvLjH868gwgzrSUIegQXYw',
	'feelssans': 'http://vignette2.wikia.nocookie.net/deathbattlefanon/images/6/6a/Sans.jpg/revision/latest?cb=20160417013108',
	'feelsbadtime': 'http://i.imgur.com/UmyYlsF.png',
	'feelsvegito': 'http://orig02.deviantart.net/f5d9/f/2015/015/5/3/vegito__by_dbheroes-d8e11lt.png',
	'feelsgenji': 'http://vignette2.wikia.nocookie.net/overwatch/images/0/04/Genji_portrait.png/revision/latest?cb=20160429040512',
	'feelsgrump': 'http://pre02.deviantart.net/25ea/th/pre/f/2013/005/5/f/arin_grump_vector_by_hudgeba778-d5qll1c.png ',
	'feelsnsgrump': 'http://orig03.deviantart.net/413a/f/2013/295/c/d/danny_with_jon_s_hat_by_keno9988-d6rhf90.png',
	'feelsjsrs': 'https://s-media-cache-ak0.pinimg.com/236x/84/08/d4/8408d470287361c4ffa1c9e14c105260.jpg',
	'feelspoak': 'http://i.imgur.com/jElHTOv.png',
	'feelsls': 'http://vignette1.wikia.nocookie.net/archiesonic/images/1/10/Knuckles_232.jpg/revision/latest?cb=20120823055404',
	'feelsskep': 'http://www.relatably.com/m/img/skeptical-third-world-meme-origin/the-best-of-the-skeptical-3rd-world-kid-meme.jpg',
	'feelspbs': 'http://i.imgur.com/zU28MVJ.gif',
	'feelslati': 'http://orig13.deviantart.net/aec7/f/2010/326/8/8/latias_licking_screen_by_rubythelatias-d33cvii.gif',
	'feelshs': 'http://i.imgur.com/m9ndumS.png',
	'kowens': 'http://images.sportsworldnews.com/data/thumbs/full/21904/600/0/0/0/kevin-owens.jpg',
	'llamarawr':'http://i.imgur.com/KWAQbPu.gif',
	'wAt':'https://imgflip.com/s/meme/Black-Girl-Wat.jpg',
	'llamacool':'http://i.imgur.com/X1x3728.gif',
	'Orly':'http://vignette3.wikia.nocookie.net/uncyclopedia/images/4/4a/Orly_owl.jpg/revision/latest?cb=20051112001744',
	'oshayep':'http://orig13.deviantart.net/63e7/f/2014/287/b/0/oshawott_agrees_plz_by_whatiget4beinganerd-d82v0f0.gif',
	'feelsgod':'http://i.imgur.com/NTyNMmk.gif',
	'llamanv':'http://i.imgur.com/9PgUk4M.gif',
	'feelsgrr':'https://pbs.twimg.com/profile_images/740671171021115392/eF7LcyPb_400x400.jpg',
	'fgrat':'http://www.gifbin.com/bin/072011/reverse-1313397701_big_fish_vs_small_fish.gif',
	'llamanoodle':'http://i.imgur.com/SUZkz5p.gif',
	'feelsllama':'http://i.imgur.com/oSLSk2I.gif',
	'llamayawn':'http://i.imgur.com/SVj8kBt.gif',
	'feelscute':'https://s-media-cache-ak0.pinimg.com/originals/02/c2/e9/02c2e9d6c6b7eaa127cd6df667811ec0.jpg',
	'oshacry':'http://orig00.deviantart.net/4753/f/2014/299/3/1/oshawott_cry_plz_by_whatiget4beinganerd-d84a2ea.gif',
	'arceuskarp':'http://i.imgur.com/eUTfPqp.jpg',
	'llamatea':'http://i.imgur.com/nJnakEU.gif',
	'feelsdoom':'http://i326.photobucket.com/albums/k418/kayahtic/Houndoom.gif',
	'feelsgen':'http://cdn.bulbagarden.net/upload/thumb/c/c6/094Gengar.png/250px-094Gengar.png',
	'feelsmgen':'https://img.pokemondb.net/artwork/gengar-mega.jpg ',
	'feelsboney':'http://65.media.tumblr.com/b82898d5120a7b5757eafc241becfeff/tumblr_mzp9lkFRlV1rrqkwqo1_500.png',
	'feelsam':'http://i.imgur.com/qugCLvB.png',
	'feelspclo':'http://48palw1jqfwf1zkjitvyccc1.wpengine.netdna-cdn.com/wp-content/uploads/2015/08/Piccolo2.jpg',
	'feelssmm':'https://pbs.twimg.com/profile_images/464580457003102208/nNcp2I8v_400x400.png',
	'feelswild':'http://i.imgur.com/hiJDUey.gif',
	'imslimshady':'https://40.media.tumblr.com/adbcc98351874eb6d372d3602e9ce055/tumblr_nvjksd3Ev41ufnh57o1_1280.jpg',
	'datboi':'http://vignette4.wikia.nocookie.net/clubpenguin/images/b/b3/MediaWiki_Emoticons_-_datboi.gif/revision/latest?cb=20160516033125',
	'feelsedge':'http://67.media.tumblr.com/30757d6b6367f74661a4f8d848301bfd/tumblr_inline_mgr5x5KVAI1qcqwuv.gif',
	'llamadance':'http://s3.picofile.com/file/8227910476/llama_emoji_46_this_and_that_by_jerikuto_d6uwuve.gif',
	'llamaedge':'http://www.zupimages.net/up/15/46/z47u.gif',
	'llamacringe':'http://media.tumblr.com/b2d76be3d922449b1bfeef62d9386629/tumblr_inline_mrw41pSlaD1qz4rgp.gif',
	'llamamad':'https://i.imgur.com/nFUoUQn.gif',
	'dinotongue':'http://imgur.com/YRFPwsx.gif',
	'feelsbursting':'http://imgur.com/cM9DIAo.gif',
	'feelsperfect':'http://imgur.com/g4SUXAm.gif',
	'feelsac':'http://showdownsubserver-austin0602.c9users.io/avatars/theforgottenhope.png',
	'hulktrump':'http://i.imgur.com/Z7EFxXv.gif',
	'feelstrump':'http://i.imgur.com/QoRFD18.gif',
	'trumpzilla':'http://i.imgur.com/7HiEAZS.jpg',
	'feelsumb':'http://orig14.deviantart.net/52e6/f/2010/127/9/b/umbreon_lick_avatar_by_mythicazurel.gif',
	'feelsesp':'http://a.deviantart.net/avatars/s/u/sunsetespeon.gif?4',
	'Dolan':'https://pbs.twimg.com/profile_images/559166887968260096/e-SnfdE1_400x400.jpeg',
	'feelsleaf':'http://i.neoseeker.com/mg/895/103/leafeon_lick_by_fennekveed2xww6x_thumb.gif',
	'feelsglac':'http://orig03.deviantart.net/8f38/f/2011/187/6/8/free_glaceon_lick_icon_by_supersilverabsol-d3l5esi.gif',
	'feelsbayo':'https://media.giphy.com/media/34HAuzYslsHVm/giphy.gif',
	'feelsslime':'http://i1231.photobucket.com/albums/ee503/KingZenithDen/TaggingSlime.gif',
	'feelscamilla':'https://media.giphy.com/media/ac4fuIYVNBCrm/giphy.gif',
	'feelsmudkip':'https://media.giphy.com/media/O64MQsdmwIIxO/giphy.gif',
	'llamahello':'http://i.imgur.com/6iXGZs7.gif',
	'feelsmew':'http://i0.kym-cdn.com/photos/images/masonry/000/093/476/Mew_lick_avatar_by_MythicAzurel20110725-22047-2wuksy.gif',
	'feelsskymin':'http://rs1299.pbsrc.com/albums/ag78/Mioami/Lick%20Icons/Skymin_Free_Lick_Avatar_by_Yakalentos_zps81bd5ac6.gif~c200',
	'feelspikachu': 'http://i3.kym-cdn.com/photos/images/masonry/000/093/494/my_pikachu_lick_avatar_by_pdmantsunakajaike-d366tmo20110725-22047-zx13dv.gif',
    'feelswednesday': 'https://media.tenor.co/images/cfeb7a77e287d674d56d4706dcaeab1c/raw',
    'feelslatias': 'http://a.deviantart.net/avatars/f/e/ferretlover22717.gif?3',
    'feelsliep': 'http://rs1299.pbsrc.com/albums/ag78/Mioamis/liepard_lick_icon_by_mushydog-d3h8rk7_zps3d822e5b.gif~c200',
	'feelsgeneral': 'http://rs185.pbsrc.com/albums/x259/battleshinja12/Animated/GeneralSword.gif~c200',
	'bardtrain': 'http://vignette3.wikia.nocookie.net/fireemblem/images/0/0e/Nils_battle_animation.gif/revision/latest?cb=20150919014728',
    'feelsjaffar': 'http://www.abrhsvisualarts.com/webdesign/spring15web1/fire_emblem/images/jaffar_critical.gif',
    'feelslute': 'http://www.feplanet.net/media/sprites/8/battle/animations/ally/critical/lute_sage_magic.gif',
    'Boi':'http://i.makeagif.com/media/10-26-2015/txa6Ph.gif',
    'feelspew':'http://i.imgur.com/fWUABw3.png',
    'mimikyubouncy':'https://67.media.tumblr.com/9fdb8c55c499739a9fcd4dbe30913e74/tumblr_oakxq29jzY1rg5zovo1_500.gif',
    'waithmm':'https://67.media.tumblr.com/d5db40f26fc42c616f60e2b00108de3e/tumblr_oaor6dBHBS1uv7j1fo1_400.gif',
    'feelssilvally':'http://66.media.tumblr.com/0153566329bbaaab4ce4fd3c58822a37/tumblr_ofbuj1dOD11u32314o1_1280.gif',
    'feelsjumpscare':'http://i.imgur.com/QJQvfT1.gif',
    'feelsfu':'https://s-media-cache-ak0.pinimg.com/564x/3b/55/93/3b5593f1824a05e21ab0956430202190.jpg',
    'feelsalright':'http://s1.favim.com/610/150815/aesthetic-ariana-ariana-grande-cute-Favim.com-3122061.jpg',
    'feelsknife':'http://s6.favim.com/orig/150809/aesthetic-ariana-ariana-grande-funny-Favim.com-3089226.jpg',
    'feelslele':'http://66.media.tumblr.com/39a67416c80d494931a63e4a8ecbf5cc/tumblr_ofqh95smRb1v68t0mo1_400.gif',
    'feelsbulu':'http://66.media.tumblr.com/ec4882b22d476c8201223189460289cd/tumblr_ofqh95smRb1v68t0mo2_400.gif',
    'pepekoko':'https://66.media.tumblr.com/e456e232a230f52b40babe457ccbb9ea/tumblr_ofq4m3fTO91tih2rro1_500.png',
    'feelsfini':'http://66.media.tumblr.com/ed7268315ee7f3ac698a5eeba8d13280/tumblr_ofqh95smRb1v68t0mo3_400.gif',
    'feelskoko':'https://66.media.tumblr.com/7608fca3c9675e26230b62e9617ff8d0/tumblr_ofqeazsOR01r8sc3ro1_400.gif',
    'yaboiguzma':'http://i2.kym-cdn.com/photos/images/newsfeed/001/157/939/401.gif',
    'feelsedgy':'https://66.media.tumblr.com/e019d7a035636ef9256bcccdfa914474/tumblr_od3p2daC6w1rux4bno1_540.gif',
    'feelslillie':'http://i2.kym-cdn.com/photos/images/newsfeed/001/129/874/c55.gif',
    'feelslusamine':'http://67.media.tumblr.com/1a38ecd2c446636048aacb147d305ee9/tumblr_od62ppGQjp1uq3bnuo1_500.gif',
    'feelsmchrg':'http://imgur.com/0R2ameG.png',
    'rollsafe':'http://i.imgur.com/HvBkiCe.png?1',
    'gudsht':'http://i.imgur.com/R9SO76u.png?1',
    'Boii': 'http://i.imgur.com/6P0uPtV.jpg',
    'feelsThumb':'http://i.imgur.com/dAU1hZP.png',
    'gUd':'http://a.deviantart.net/avatars/i/d/idubbbzplz.png',
    'hUh':'http://i.imgur.com/1ezMM9j.gif',
    'feelsfeel':'http://i.imgur.com/s8kN3AV.png',
    'feelsweird':'https://cdn.betterttv.net/emote/5603731ce5fc5eff1de93229/2x',
    'feelschiaki':'http://pa1.narvii.com/5951/e3580321d1a8b4bf19a922ebcc2f6e756c920f93_hq.gif',
    'feelsToGood':'http://i.imgur.com/87zXwfR.png',
    'feelstrig':'http://i.imgur.com/NOwS64t.png',
    'feelsmmyea':'https://cdn.betterttv.net/emote/562bf1bec6035e430db80824/2x',
};


Gold.emoticons = {
	maxChatEmotes: 4, // the default maximum number of emoticons in one chat message that gets parsed
	adminBypassMaxChatEmotes: true, // can administrators use as many emoticons as they wish?
	chatEmotes: {}, // holds the emoticons, to be merged with json later on

	// handles replacing emoticon messages with the HTML and then PS formats message
	// this is also used for the PM command (located in chat.js)
	processEmoticons: function (text) {
		let patterns = [], metachars = /[[\]{}()*+?.\\|^$\-,&#\s]/g;

		for (let i in this.chatEmotes) {
			if (this.chatEmotes[i]) {
				patterns.push(`(${i.replace(metachars, "\\$&")})`);
			}
		}

		let message = text.replace(new RegExp(patterns.join('|'), 'g'), match => {
			return typeof this.chatEmotes[match] !== 'undefined' ?
				`<img src="${this.chatEmotes[match]}" title="${match}"/>` :
				match;
		});
		if (message === text) return text;

		message = Gold.formatMessage(message); // PS formatting

		if (message.substr(0, 4) === '&gt;' || message.substr(0, 1) === '>') message = `<span class="greentext">${message}</span>`; // greentext
		return message;
	},

	// checks what emote modchat level a room is set at vs user's auth in that room
	checkEmoteModchat: function (user, room) {
		let rank = (user.group !== ' ' ? user.group : (room.auth ? room.auth[user.userid] : user.group));
		switch (room.emoteModChat) {
		case undefined:
		case false:
			return true;
		case 'ac':
		case 'autoconfirmed':
			return user.autoconfirmed;
		default:
			let groups = Config.groupsranking;
			let i = groups.indexOf(rank); // rank # of user
			let u = groups.indexOf(room.emoteModChat); // rank # of emote modchat
			if (i >= u) return true;
		}
		return false;
	},

	// handles if/when to put an emoticon message to a chat
	processChatData: function (user, room, connection, message) {
		let match = false;
		let parsed_message = this.processEmoticons(message);
		for (let i in this.chatEmotes) {
			if (~message.indexOf(i)) {
				if ((parsed_message.match(/<img/g) || []).length <= this.maxChatEmotes || (this.adminBypassMaxChatEmotes && user.can('hotpatch'))) {
					match = true;
				} else {
					match = false;
				}
			}
		}
		if (Users.ShadowBan.checkBanned(user) && match) {
			let origmsg = message;
			message = Chat.escapeHTML(message);
			message = this.processEmoticons(message);
			user.sendTo(room, `${(room.type === 'chat' ? '|c:|' + ~~(Date.now() / 1000) + '|' : '|c|') + user.getIdentity(room).substr(0, 1) + user.name}|/html ${message}`);
			Users.ShadowBan.addMessage(user, `To ${room}`, origmsg);
		} else {
			if (!this.checkEmoteModchat(user, room)) {
				let kitty = message = this.processEmoticons(message);
				message = Chat.escapeHTML(kitty);
				return message;
			} else if (this.checkEmoteModchat(user, room)) {
				if (!match || message.charAt(0) === '!') return true;
				message = Chat.escapeHTML(message).replace(/&#x2f;/g, '/');
				message = this.processEmoticons(message);
				let name = user.getIdentity(room).substr(0, 1) + user.name;
				room.add(`${(room.type === 'chat' ? '|c:|' + ~~(Date.now() / 1000) + '|' : '|c|') + name}|/html ${message}`).update();
				room.messageCount++;
				return false;
			}
		}
	},
};


// commands

function loadEmotes() {
	fs.readFile('config/emotes.json', 'utf8', function (err, file) {
		if (err) return;
		Gold.emoticons.chatEmotes = JSON.parse(file);
		emotes = Gold.emoticons.chatEmotes;
	});
}
setTimeout(function () {
	loadEmotes();
}, 1000);

function saveEmotes() {
	try {
		Object.assign(Gold.emoticons.chatEmotes, emotes);
		fs.writeFileSync('config/emotes.json', JSON.stringify(emotes));
	} catch (e) {
		Rooms('staff').add('Emoticons have failed to save: ' + e.stack).update();
	}
}

exports.commands = {
	emoticons: 'ezemote',
	emoticon: 'ezemote',
	emotes: 'ezemote',
	temotes: 'ezemote',
	temote: 'ezemote',
	emote: 'ezemote',
	ec: 'ezemote',
	ezemote: function (target, room, user) {
		if (!target) target = "help";
		let parts = target.split(',').map(p => p.trim());
		if (!parts[0]) return this.parse('/help ezemote');

		try {
			switch (toId(parts[0])) {
			case 'add':
				if (!this.can('pban')) return this.errorReply("Access denied.");
				if (!this.canTalk()) return this.errorReply("You cannot do this while unable to talk.");
				if (!(parts[2] || parts[3])) return this.errorReply("Usage: /emote add, [emoticon], [link]");
				let emoteName = parts[1];
				if (Gold.emoticons.chatEmotes[emoteName]) return this.errorReply(`ERROR - the emoticon: ${emoteName} already exists.`);
				let link = parts.splice(2, parts.length).join(',');
				let fileTypes = [".gif", ".png", ".jpg"];
				if (!~fileTypes.indexOf(link.substr(-4))) return this.errorReply("ERROR: the emoticon you are trying to add must be a gif, png, or jpg.");
				emotes[emoteName] = Gold.emoticons.chatEmotes[emoteName] = link;
				saveEmotes();
				this.sendReply(`The emoticon ${emoteName} has been added.`);
				this.logModCommand(`${user.name} added the emoticon: ${emoteName}`);
				Rooms('staff').add(`The emoticon "${emoteName}" was added by ${user.name}.`).update();
				break;

			case 'rem':
			case 'remove':
			case 'del':
			case 'delete':
				if (!this.can('pban')) return this.errorReply("Access denied.");
				if (!this.canTalk()) return this.errorReply("You cannot do this while unable to talk.");
				if (!parts[1]) return this.errorReply("/emote remove, [emoticon]");
				let emoteName2 = parts[1];
				if (!Gold.emoticons.chatEmotes[emoteName2]) return this.errorReply(`ERROR - the emoticon: ${emoteName2} does not exist.`);
				delete Gold.emoticons.chatEmotes[emoteName2];
				delete emotes[emoteName2];
				saveEmotes();
				this.sendReply(`The emoticon ${emoteName2} has been removed.`);
				this.logModCommand(`${user.name} removed the emoticon: ${emoteName2}`);
				Rooms('staff').add(`The emoticon "${emoteName2}" was removed by ${user.name}.`).update();
				break;

			case 'list':
				if (!this.runBroadcast()) return;
				if (this.broadcasting) return this.errorReply("ERROR: this command is too spammy to broadcast.  Use / instead of ! to see it for yourself.");
				let output = `<b>There's a total of ${Object.keys(emotes).length} emoticons added with this command:</b><br />`;
				for (let e in emotes) {
					output += `${e}<br />`;
				}
				this.sendReplyBox(`<div class="infobox-limited" target="_blank">${output}</div>`);
				break;

			case 'view':
				if (!this.runBroadcast()) return;
				let name = Object.keys(Gold.emoticons.chatEmotes);
				let emoticons = [];
				let len = name.length;
				while (len--) {
					emoticons.push((`${Gold.emoticons.processEmoticons(name[(name.length - 1) - len])}&nbsp;${name[(name.length - 1) - len]}`));
				}
				this.sendReplyBox(`<div class="infobox-limited" target="_blank"><b><u>List of emoticons (${emoticons.length}):</b></u> <br/><br/>${emoticons.join(' ').toString()}</div>`);
				break;

			case 'max':
			case 'maxemotes':
				if (!this.can('hotpatch')) return false;
				if (!parts[1]) return this.errorReply("Usage: /emote max, [max emotes per message].");
				if (Number(parts[1]) < 1) return this.errorReply("Max emotes cannot be less than 1.");
				if (isNaN(Number(parts[1]))) return this.errorReply("The max emotes must be a number.");
				if (~String(parts[1]).indexOf('.')) return this.errorReply("Cannot contain a decimal.");
				Gold.emoticons.maxChatEmotes = parts[1];
				this.privateModCommand(`(${user.name} has set the max emoticons per message to be ${parts[1]}.)`);
				break;

			case 'object':
				if (!this.runBroadcast()) return;
				if (this.broadcasting) return this.errorReply("ERROR: this command is too spammy to broadcast.  Use / instead of ! to see it for yourself.");
				this.sendReplyBox(`Gold.emoticons.chatEmotes = <br />${fs.readFileSync('config/emotes.json', 'utf8')}`);
				break;

			case 'modchat':
				if (!parts[1]) parts[1] = "status";
				switch (parts[1]) {
				case 'set':
					if (room.type === 'chat' && !this.can('ban', null, room) || room.type === 'battle' && !this.can('privateroom', null, room)) return this.errorReply("Access denied.");
					if (!this.canTalk()) return this.errorReply("You cannot do this while unable to talk.");
					if (room.isPersonal) return this.errorReply("You cannot set emoticon moderated chat in personal rooms.");
					if (!parts[2]) return this.errorReply("Usage: /emote modchat, set, [rank] - Sets modchat for emoticons in the respected room.");
					if (room.emoteModChat && toId(parts[2]) === 'off' || toId(parts[2]) === 'disable') return this.errorReply("Did you mean /emote modchat, disable?");
					if (!Config.groups[parts[2]] && toId(parts[2]) !== 'autoconfirmed' && toId(parts[2]) !== 'ac' || parts[2] === '★') return this.errorReply(`ERROR: ${parts[2]} is not a defined group in Config or is not yet optimized for moderated emoticon chat at this time.`);
					if (room.emoteModChat === parts[2]) return this.errorReply("Emoticon modchat is already enabled in this room for the rank you're trying to set it to.");
					if (toId(parts[2]) === 'ac') parts[2] = 'autoconfirmed';
					room.emoteModChat = parts[2];
					if (room.type === 'chat') room.chatRoomData.emoteModChat = room.emoteModChat;
					Rooms.global.writeChatRoomData();
					room.add(`|raw|<div class="broadcast-red"><b>Chat Emoticons Moderated Chat has been set!</b><br />To use emoticons in this room, you must be of rank <b>${parts[2]}</b> or higher.`).update();
					this.privateModCommand(`(${user.name} has set emoticon moderated chat for rank ${parts[2]} and up.)`);
					break;
				case 'off':
				case 'disable':
					if (room.type === 'chat' && !this.can('ban', null, room) || room.type === 'battle' && !this.can('privateroom', null, room)) return this.errorReply("Access denied.");
					if (!this.canTalk()) return this.errorReply("You cannot do this while unable to talk.");
					if (room.isPersonal) return this.errorReply("Emoticon moderated chat is enabled in personal rooms by default and cannot be changed.");
					if (!room.emoteModChat) return this.errorReply("Emoticon modchat is already disabled in this room.");
					room.emoteModChat = false;
					if (room.type === 'chat') room.chatRoomData.emoteModChat = room.emoteModChat;
					Rooms.global.writeChatRoomData();
					room.add("|raw|<div class=\"broadcast-blue\"><b>Chat Emoticons Moderated Chat has been disabled!</b><br />Everyone in this room may use chat emoticons.").update();
					this.privateModCommand(`(${user.name} has enabled chat emoticons for everyone in this room.)`);
					break;
				default:
				case 'status':
					let status = (room.emoteModChat === undefined || !room.emoteModChat ? false : room.emoteModChat);
					return this.sendReply(`Emoticon moderated chat is currently set to: ${status}`);
				}
				break;

			case 'reload':
			case 'hotpatch':
				if (!this.can('hotpatch')) return false;
				loadEmotes();
				this.privateModCommand(`(${user.name} has reloaded all emoticons on the server.)`);
				break;

			case 'help':
				this.parse('/help ezemote');
				break;

			default:
				this.errorReply(`Emoticon command '${parts[0]}' not found.  Check spelling?`);
			}
		} catch (e) {
			console.log(`ERROR!  The Emoticon script has crashed!\n${e.stack}`);
		}
	},
	ezemotehelp: ["Gold's custom emoticons script commands:",
		"/emote add, [emote], [link] - Adds a chat emoticon. Requires ~.",
		"/emote remove, [emote] - Removes a chat emoticon. Requires ~.",
		"/emote modchat, set, [rank symbol / disable] - Sets moderated chat for chat emoticons in the respected room to the respected rank. Requires @, #, &, ~.",
		"/emote modchat, disable - Disables moderated chat for chat emoticons (enabled by default.) Requires @, #, &, ~.",
		"/emote modchat - Views the current moderated chat status of chat emoticons.",
		"/emote list - Shows the chat emoticons in a list form.",
		"/emote view - Shows all of the current chat emoticons with the respected image.",
		"/emote object - Shows the object of Gold.emoticons.chatEmotes. (Mostly for development usage)",
		"/emote max, [max emotes / message] - Sets the max emoticon messages per chat message.  Requires ~.",
		"/emote help - Shows this help command.",
	],
	emoticonlist: 'ev',
	emotelist: 'ev',
	ev: function (target, room, user) {
		return this.parse("/emote view");
	},
};
