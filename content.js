var safeLow = '';
var standard = '';
var currentDateTime = '';
var lastUpdated = '';

var ethPriceHuf = 0;
var ethPriceUsd = 0;
var ethVal = 0;
var air = 0;
var water = 0;
var earth = 0;
var fire = 0;
var energy = 0;
var adv1 = 0;
var adv2 = 0;
var adv3 = 0;
var adv4 = 0;
var adv5 = 0;
var adv6 = 0;
var adv7 = 0;
var adv8 = 0;

function getGasPrice() {
    if ($('.etherGasPrices').length === 0) {
        $('body').append('<div class="etherGasPrices"><h3>Ξ Gas Price</h3><div class="safeLow">SafeLow: <span id="slVal"></span></div><div class="average">Standard: <span id="stVal"></span></div><div class="gasUpdated text-center"></div></div>');
    }
}

function extraMenus() {
    if ($('#extraMenus').length === 0) {
        $('body').append('<div id="extraMenus"><h3>Quick menu</h3><ul><li class="qm_inv"><a href="/inventory">Inventory</a></li><li class="qm_mark"><a href="/items_sell">Items market</a></li><li class="qm_paw"><a href="/shop">Paw Shop</a></li><li class="qm_craft"><a href="/quest_craft">Crafting</a></li><!--<li class="qm_extras"><a href="#">Set Bonuses</a></li> --></ul><h3 style="margin-top:10px;" id="qm_ext">External links</h3><ul class="ext_links"><li class="qm_opensea"><a href="https://opensea.io/assets/blockchaincuties?sortBy=assets_prod_main_price_asc&toggle%5Bon_sale%5D=true" target="_blank">OpenSea listings</a></li><li class="qm_trade"><a href="https://t.me/joinchat/HMBQglELGfKqvA3RpatKyg" target="_blank">Unofficial BC Trading Group</a></li><li class="qm_dcm"><a href="https://t.me/darkCuties" target="_blank">DCM tips & tricks channel</a></li></ul></div>');

        $('body').append('<div class="dcm_extras" id="dcmExtras" tabindex="-1" role="dialog"><div class="extras_header"><span class="at_popup_close"><i class="fa fa-times" aria-hidden="true"></i></span> <h3>Set Bonuses</h3></div> </div>');
    }
}

function copyToClipboardMsg(elem, msgElem) {
    elem.select();
    document.execCommand("copy");
    elem.blur();
    if (typeof msgElem === "string") {
        msgElem = document.getElementById(msgElem);
    }
    if ($('#giftWallet').length !== 0) {
        $('#giftWallet').val(elem.val());
        msgElem.textContent = elem.val() + " copied to the clipboard and gift address.";
    } else {
        msgElem.textContent = elem.val() + " copied to clipboard.";
    }
    setTimeout(function () {
        msgElem.textContent = "";
    }, 2000);
}

function autoTools() {
    if ((window.location.pathname.startsWith('/pets_adventure'))) {
        localStorage.setItem('premiumWallets', JSON.stringify({}));
        var req = new XMLHttpRequest();
        req.open('GET', "https://dcm.verychard.com/premium/subscribers", true);
        req.onload = function () {
            var jsonResponse = JSON.parse(req.responseText);
            localStorage.setItem('premiumWallets', jsonResponse.premium_wallets);
        };
        req.send(null);


        if ($('.at_xmas').length === 0) {


            $('.filter_header').append('<li class="at_xmas"><button id="at_potion"><img src="https://dcm.verychard.com/resources/potion.png"></button><button id="at_adventure_open"><img src="https://dcm.verychard.com/resources/sword.png"></button></li>');

            var prePotions = '<option value="0">None</option><option value="ElixirAdventure">Adventure Potion</option><option value="ElixirAdventureGrand">Adventure Potion Grand</option>'

            var autoToolsPopup = '<div class="autoToolsPopup" id="at_popup" tabindex="-1" role="dialog"><span class="at_popup_close"><i class="fa fa-times" aria-hidden="true"></i></span><div class="at_tooltip"><i class="far fa-question-circle"></i><div class="tooltiptext"><div class="tooltipInner"><h3>How it works:</h3><b>STRONGEST</b><br/>It is taking all elements into consideration and selecting the one where your cutie is strongest.<br/><br/><b>HIGHEST</b><br/>Is based on your cutie\'s level<br/><br/><b>PREFERRED</b><br/>Sends only cuties who got their preferred adventure set on the cutie page.<br/><br/><b>NO NEWBORNS</b><br/>This option will not allow sending cuties with 0XP<br/><small>(selected by default)</small><br/><br/><b>NO NAKED</b><br/>It prevents sending out cuties without gear<br/><small>(selected by default)</small><br/><br/><b>SPECIFIC ADVENTURE</b><br/>This will send all eligible cuties to the selected adventure.</div></div></div><h4>Auto Tools - Sender</h4><div class="at_popup_body"><div class="methods"><small>Select sending method or choose a specific adventure.<br/>If Strongest or Highest can\'t get selected, refresh the page!</small><div class="at_method_select" data-click="strongest">Strongest</div><div class="at_method_select" data-click="highest">Highest</div><div class="at_method_select" data-click="preferred">Preferred</div><select id="at_adventure"><option value="" selected disabled>Choose an adventure</option><option value="WindyHills">Windy Hills</option><option value="SnowyMountain">The Snowy Mountain</option><option value="MagicalForest">Magical Forest</option><option value="TheDesert">The Desert</option><option value="IvoryTower">Ivory Tower</option><option value="Metropolis">Metropolis</option><option value="Ghetto">City Ghetto</option><option value="GatesOfBabylon">Gates of Babylon</option><option value="BloodMoonForest">Blood moon forest</option><option value="Wasteland">Wasteland</option><option value="Tavern">Tavern</option></select><div class="at_method_select no_newborns selected" data-click="noNewborns">No newborns (0 XP)</div><div class="at_method_select no_naked selected" data-click="noNaked">No naked</div><select class="at_method_select" id="at_adv_prepotion"><option value="" selected disabled>Potion to drink before adventure</option>' + prePotions + '</select></div><div id="at_msg"></div><button id="at_send">Send now!</button><div class="at_stats">Auto Tools has saved you <b>0</b> clicks so far :)</div></div></div>';


            var advCds = [
                "Ironlike - 1m",
                "Powerful - 2m",
                "Tough - 5m",
                "Strong - 10m",
                "Hard - 30m",
                "Hefty - 1h",
                "Firm - 2h",
                "Irregular - 4h",
                "Forceless - 8h",
                "Weak - 16h",
                "Soft - 1d",
                "Gentle - 1d 8h",
                "Tender - 1d 16h",
                "Powerless - 2d"];

            var advCdSelection = '';

            $.each(advCds, function (key, cooldown) {
                advCdSelection += '<option value="' + key + '">' + cooldown + '</option>';
            });

            var autoToolsPotionPopup = '<div class="autoToolsPopup" id="at_popup_potion" tabindex="-1" role="dialog"><span class="at_popup_close"><i class="fa fa-times" aria-hidden="true"></i></span><div class="at_tooltip"><i class="far fa-question-circle"></i><div class="tooltiptext"><div class="tooltipInner"><h3>How it works:</h3><b>STEP 1</b><br/>Select a potion to drink<br/><br/><b>STEP 2</b><br/>Choose from group or preferred. <i><b>GROUP</b></i> is always based on the selected potion. You can assign cuties to the potion groups from the adventure page, if you hover on the blacklist (block) icon in the bottom left corner. <i><b>PREFERRED ONLY</b></i> will select the cuties you have pre-selected preferred cooldown<br/><br/><b>STEP 3</b><br/>Give a number of potions to use on each cutie, set <b>preferred cooldown</b> (you can set it on the cutie page) or set a cd level for all.</div></div></div><h4>Auto Tools - Drinker</h4><div class="at_popup_body"><div class="methods items-pots"><small>If having issues, try to refresh the page!</small><button id="get-items" data-click="getItems">Count items</button><div class="at_method_select" data-click="adventurePot"><img src="/static/items/png/ElixirAdventure.png" style="width: 35px;height: 35px; margin: 0 auto;"><div class="itemCount"></div></div><div class="at_method_select" data-click="adventurePotGrand"><img src="/static/items/png/ElixirAdventureGrand.png" style="width: 35px;height: 35px; margin: 0 auto;"><div class="itemCount"></div></div><div class="at_method_select" data-click="energyDrink"><img src="/static/items/png/ElixirEnergy.png" style="width: 35px;height: 35px; margin: 0 auto;"><div class="itemCount"></div></div></div><div id="at_msg_pot"></div><button id="at_drink">Start</button><div class="at_stats">Auto Tools has saved you <b>0</b> clicks so far :)</div><div class="methods commands"><small><span class="group_count">0</span> cuties selected in <span class="group_name"></span> group<span class="reset_group">reset group</span></small><div class="at_method_select" data-click="groupOnly">Select potion group</div><div class="at_method_select" data-click="selectAll">Select preferred only</div><div class="adventureBlock"><small>Select how much potions to use on each cutie or choose a CD level for all of them</small><input class="at_method_select" id="potion_number" type="number" min="1" max="13" data-click="roundsToDrink"/><div class="at_method_select" data-click="preferredCd">Preferred CD</div><select id="at_adv_cd"><option value="" selected disabled>Choose desired level</option>' + advCdSelection + '</select></div></div></div></div>';

            $('.filter_header').append(autoToolsPopup);
            $('.filter_header').append(autoToolsPotionPopup);


            if (!localStorage.getItem('playerId')) {
                $('#at_send').text('Get Player ID');
                $('#at_msg').text('First press will get player ID, then you can send cuties.');
            } else {
                var playerId = localStorage.getItem('playerId');
                var savedClicks = localStorage.getItem('savedClicks' + playerId) || 0;
                $('#at_send').text('Send now!');
                $('#at_msg').text('');
                $('.at_stats b').text(savedClicks);
                $('.at_xmas').append('<i class="fas fa-sync" id="at_reset_id" title="Get Player ID again (useful when using multiple accounts and switching between them)"></i>');
            }

            $('.at_popup_close').on("click", function () {
                $('#at_popup, #at_popup_potion').hide();
                $('#at_potion, #at_adventure_open').removeClass('active');
            });
        }
    } else if (window.location.pathname.indexOf('/pet/') === 0 && ($('.pet_header_owner-name').attr('href') !== undefined && $('.pet_header_owner-name').attr('href').match(/\d+/)[0] == localStorage.getItem('playerId')) && $('.auto_tools_prefs').length === 0) {
        var cutieId = location.pathname.match(".*/(.*)")[1];
        var petLvl = parseInt($('.exp_level').text());
        var currentCDs = localStorage.getItem('preferredACD');
        if (currentCDs) {
            var currentCDs = JSON.parse(currentCDs);
        } else {
            var currentCDs = {};
        }
        var currentCD = currentCDs[cutieId];

        var currentPrefs = localStorage.getItem('preferredAdv');
        if (currentPrefs) {
            var currentPrefs = JSON.parse(currentPrefs);
        } else {
            var currentPrefs = {};
        }
        var currentPref = currentPrefs[cutieId];
        var advCds = [
            "Ironlike - 1m",
            "Powerful - 2m",
            "Tough - 5m",
            "Strong - 10m",
            "Hard - 30m",
            "Hefty - 1h",
            "Firm - 2h",
            "Irregular - 4h",
            "Forceless - 8h",
            "Weak - 16h",
            "Soft - 1d",
            "Gentle - 1d 8h",
            "Tender - 1d 16h",
            "Powerless - 2d"];
        var adventures = [
            'WindyHills',
            'SnowyMountain',
            'MagicalForest',
            'TheDesert',
            'IvoryTower',
            'Metropolis',
            'Ghetto',
            'GatesOfBabylon',
            'BloodMoonForest',
            'Wasteland',
            'Tavern',
        ];

        var advCdSelection = '';
        var advPrefSelection = '';

        $.each(advCds, function (key, cooldown) {
            advCdSelection += '<option value="' + key + '">' + cooldown + '</option>';
        });

        $.each(adventures, function (key, adventure) {
            advPrefSelection += '<option class="' + (key > petLvl ? 'tooSmall' : '') + '" value="' + adventure + '">' + adventure + (key > petLvl ? ' - lvl too low' : '') + '</option>';
        });


        $('.exp_block').append('<div class="pet_section_line_header auto_tools_prefs"><div class="line_secetion_header"></div><h3 class="pet_section_header">Auto Tools Preferences</h3></div><select id="at_adv_cd"><option value="" selected disabled>Choose Adventure CD to maintain</option><option value="clear">None</option>' + advCdSelection + '</select><select id="at_adv_pref"><option value="" selected disabled>Choose Preferred Adventure</option><option value="clear">None</option>' + advPrefSelection + '</select>');

        $('#at_adv_cd').val(currentCD);
        $('#at_adv_pref').val(currentPref);

        $('#at_adv_cd').on("change", function () {
            if ($('#at_adv_cd option:selected').val() === 'clear') {
                delete currentCDs[cutieId];
            } else {
                currentCDs[cutieId] = $('#at_adv_cd option:selected').val();
            }
            localStorage.setItem('preferredACD', JSON.stringify(currentCDs));
        });

        $('#at_adv_pref').on("change", function () {
            if ($('#at_adv_pref option:selected').val() === 'clear') {
                delete currentPrefs[cutieId];
            } else {
                currentPrefs[cutieId] = $('#at_adv_pref option:selected').val();
            }
            localStorage.setItem('preferredAdv', JSON.stringify(currentPrefs));
        });

    }
}

function friendList() {
    if ($('#friendList').length === 0) {

        $('#extraMenus').append('<div class="resetFriendList">if you can\'t see Friend list, click the button below, to reset it. (all your friends will be lost)<button id="qmFriendReset">RESET</button></div>');

        $('#qmFriendReset').on("click", function () {

            $('.resetFriendList').text("Friends reset.\nRefresh the page to be able to use the Friend list.");
            setTimeout(function () {
                $('.resetFriendList').text("");
            }, 2000);

            localStorage.setItem('friendList', JSON.stringify({}));
        });

        var friendz = '';
        friends = localStorage.getItem('friendList');
        if (!friends) {
            friends = {};
            localStorage.setItem('friendList', JSON.stringify(friends));
        } else {
            friends = JSON.parse(friends);
        }
        $.each(friends, function (key, data) {
            if (data) {
                friendz = friendz + '<li class="friend"><span>' + key + '</span><input id="' + key + '" value="' + data + '"></input><i class="far fa-trash-alt"></i></li>';
            }
        })

        $('#extraMenus').append('<div id="friendList"><div class="qm_toggle"><i class="fas fa-caret-left"></i></div><h3 style="margin-top:10px;">Friend list</h3><div class="text-center new-friend-button"><div class="btn btn-small">Add new</div></div><div class="add-friend"><input id="newFriendName" placeholder="Name"></input><input id="newFriendAddress" placeholder="ETH/EOS/TRX address"></input><i class="fas fa-plus"></i></div><ul id="friendz"></ul><div id="msg"></div></div>');

        $('#friendz').append(friendz);

        $('.resetFriendList').remove();


        $('.qm_toggle').on("click", function () {
            $('#extraMenus').toggleClass('hide');
            $('.qm_toggle i').toggleClass('toggled');
        });
        $('.friend span').on("click", function () {
            copyToClipboardMsg($(this).next('input'), 'msg');
        });
        $('.new-friend-button .btn').on("click", function () {
            $('.add-friend').show();
        });
        $('.add-friend i').on("click", function () {
            var friend_id = $('#newFriendName').val();
            var friend_address = $('#newFriendAddress').val();

            friends = localStorage.getItem('friendList');
            if (!friends) {
                friends = {};
            } else {
                friends = JSON.parse(friends);
            }

            friends[friend_id] = friend_address;
            localStorage.setItem('friendList', JSON.stringify(friends));

            $('#friendz').append('<li class="friend"><span>' + friend_id + '</span><input id="' + friend_id + '" value="' + friend_address + '"></input></li>');

            $('#newFriendName').val('');
            $('#newFriendAddress').val('');
            $('.add-friend').hide();
            $('#msg').text("Friend saved.\nRefresh the page to be able to use it.");
            setTimeout(function () {
                $('#msg').text("");
            }, 2000);
        });
        $('.friend i').on("click", function () {
            friend = $(this).parent();

            friends = localStorage.getItem('friendList');
            if (friends) {
                friends = JSON.parse(friends);
            }

            delete friends[friend.find('input').attr('id')];

            localStorage.setItem('friendList', JSON.stringify(friends));
            friend.hide();
            $('#msg').text("Friend deleted");
            setTimeout(function () {
                $('#msg').text("");
            }, 2000);

        });
        $('.friend input').on("change", function () {
            var friend_id = $(this).attr('id');
            var friend_address = $(this).val();

            friends = localStorage.getItem('friendList');
            if (friends) {
                friends = JSON.parse(friends);
            }


            friends[friend_id] = friend_address;
            localStorage.setItem('friendList', JSON.stringify(friends));
            $('#msg').text("Friend saved");
            setTimeout(function () {
                $('#msg').text("");
            }, 2000);
        });
    }


}

function genomeMapper() {
    var genomArray = $('.genome_line').text().split("");
    genomArray[0] = (!genomArray[0] ? '' : ('<span class="geneSystem" title="Update Number">' + genomArray[0] + '</span>'));
    genomArray[1] = (!genomArray[1] ? '' : ('<span class="geneSystem" title="Update Number">' + genomArray[1] + '</span>'));
    genomArray[2] = (!genomArray[2] ? '' : ('<span class="geneSystem" title="Animal Type">' + genomArray[2] + '</span>'));
    genomArray[3] = (!genomArray[3] ? '' : ('<span class="geneSystem" title="Animal Type">' + genomArray[3] + '</span>'));
    genomArray[4] = (!genomArray[4] ? '' : ('<span class="geneSystem" title="Noble">' + genomArray[4] + '</span>'));
    genomArray[5] = (!genomArray[5] ? '' : ('<span class="geneSystem" title="Promo">' + genomArray[5] + '</span>'));
    genomArray[6] = (!genomArray[6] ? '' : ('<span class="geneSystem" title="Reserved">' + genomArray[6] + '</span>'));

    genomArray[7] = (!genomArray[7] ? '' : ('<span  class="geneBase" title="D Hair">' + genomArray[7] + '</span>'));
    genomArray[8] = (!genomArray[8] ? '' : ('<span  class="geneBase" title="D Moustache">' + genomArray[8] + '</span>'));
    genomArray[9] = (!genomArray[9] ? '' : ('<span  class="geneBase" title="D Eyes">' + genomArray[9] + '</span>'));
    genomArray[10] = (!genomArray[10] ? '' : ('<span class="geneBase" title="D Mouth">' + genomArray[10] + '</span>'));
    genomArray[11] = (!genomArray[11] ? '' : ('<span class="geneBase" title="D Head">' + genomArray[11] + '</span>'));
    genomArray[12] = (!genomArray[12] ? '' : ('<span class="geneBase" title="D Ears">' + genomArray[12] + '</span>'));
    genomArray[13] = (!genomArray[13] ? '' : ('<span class="geneBase" title="D Body">' + genomArray[13] + '</span>'));
    genomArray[14] = (!genomArray[14] ? '' : ('<span class="geneBase" title="D Paw">' + genomArray[14] + '</span>'));
    genomArray[15] = (!genomArray[15] ? '' : ('<span class="geneBase" title="D Hand">' + genomArray[15] + '</span>'));
    genomArray[16] = (!genomArray[16] ? '' : ('<span class="geneBase" title="D Leg">' + genomArray[16] + '</span>'));
    genomArray[17] = (!genomArray[17] ? '' : ('<span class="geneBase" title="D Feet">' + genomArray[17] + '</span>'));
    genomArray[18] = (!genomArray[18] ? '' : ('<span class="geneBase" title="D Tail">' + genomArray[18] + '</span>'));
    genomArray[19] = (!genomArray[19] ? '' : ('<span class="geneBase" title="D HairBack">' + genomArray[19] + '</span>'));
    genomArray[20] = (!genomArray[20] ? '' : ('<span class="geneReserved" title="D Nose">' + genomArray[20] + '</span>'));
    genomArray[21] = (!genomArray[21] ? '' : ('<span class="geneColor" title="D Body Color">' + genomArray[21] + '</span>'));
    genomArray[22] = (!genomArray[22] ? '' : ('<span class="geneColor" title="D Big Spots Color">' + genomArray[22] + '</span>'));
    genomArray[23] = (!genomArray[23] ? '' : ('<span class="geneColor" title="D Small Spots Color">' + genomArray[23] + '</span>'));
    genomArray[24] = (!genomArray[24] ? '' : ('<span class="geneColor" title="D Add Spots Color">' + genomArray[24] + '</span>'));
    genomArray[25] = (!genomArray[25] ? '' : ('<span class="geneColor" title="D Eyes Color">' + genomArray[25] + '</span>'));

    genomArray[26] = (!genomArray[26] ? '' : ('<span class="geneBase" title="R1 Hair">' + genomArray[26] + '</span>'));
    genomArray[27] = (!genomArray[27] ? '' : ('<span class="geneBase" title="R1 Moustache">' + genomArray[27] + '</span>'));
    genomArray[28] = (!genomArray[28] ? '' : ('<span class="geneBase" title="R1 Eyes">' + genomArray[28] + '</span>'));
    genomArray[29] = (!genomArray[29] ? '' : ('<span class="geneBase" title="R1 Mouth">' + genomArray[29] + '</span>'));
    genomArray[30] = (!genomArray[30] ? '' : ('<span class="geneBase" title="R1 Head">' + genomArray[30] + '</span>'));
    genomArray[31] = (!genomArray[31] ? '' : ('<span class="geneBase" title="R1 Ears">' + genomArray[31] + '</span>'));
    genomArray[32] = (!genomArray[32] ? '' : ('<span class="geneBase" title="R1 Body">' + genomArray[32] + '</span>'));
    genomArray[33] = (!genomArray[33] ? '' : ('<span class="geneBase" title="R1 Paw">' + genomArray[33] + '</span>'));
    genomArray[34] = (!genomArray[34] ? '' : ('<span class="geneBase" title="R1 Hand">' + genomArray[34] + '</span>'));
    genomArray[35] = (!genomArray[35] ? '' : ('<span class="geneBase" title="R1 Leg">' + genomArray[35] + '</span>'));
    genomArray[36] = (!genomArray[36] ? '' : ('<span class="geneBase" title="R1 Feet">' + genomArray[36] + '</span>'));
    genomArray[37] = (!genomArray[37] ? '' : ('<span class="geneBase" title="R1 Tail">' + genomArray[37] + '</span>'));
    genomArray[38] = (!genomArray[38] ? '' : ('<span class="geneBase" title="R1 HairBack">' + genomArray[38] + '</span>'));
    genomArray[39] = (!genomArray[39] ? '' : ('<span class="geneReserved" title="R1 Nose">' + genomArray[39] + '</span>'));
    genomArray[40] = (!genomArray[40] ? '' : ('<span class="geneColor" title="R1 Body Color">' + genomArray[40] + '</span>'));
    genomArray[41] = (!genomArray[41] ? '' : ('<span class="geneColor" title="R1 Big Spots Color">' + genomArray[41] + '</span>'));
    genomArray[42] = (!genomArray[42] ? '' : ('<span class="geneColor" title="R1 Small Spots Color">' + genomArray[42] + '</span>'));
    genomArray[43] = (!genomArray[43] ? '' : ('<span class="geneColor" title="R1 Add Spots Color">' + genomArray[43] + '</span>'));
    genomArray[44] = (!genomArray[44] ? '' : ('<span class="geneColor" title="R1 Eyes Color">' + genomArray[44] + '</span>'));

    genomArray[45] = (!genomArray[45] ? '' : ('<span class="geneBase" title="R2 Hair">' + genomArray[45] + '</span>'));
    genomArray[46] = (!genomArray[46] ? '' : ('<span class="geneBase" title="R2 Moustache">' + genomArray[46] + '</span>'));
    genomArray[47] = (!genomArray[47] ? '' : ('<span class="geneBase" title="R2 Eyes">' + genomArray[47] + '</span>'));
    genomArray[48] = (!genomArray[48] ? '' : ('<span class="geneBase" title="R2 Mouth">' + genomArray[48] + '</span>'));
    genomArray[49] = (!genomArray[49] ? '' : ('<span class="geneBase" title="R2 Head">' + genomArray[49] + '</span>'));
    genomArray[50] = (!genomArray[50] ? '' : ('<span class="geneBase" title="R2 Ears">' + genomArray[50] + '</span>'));
    genomArray[51] = (!genomArray[51] ? '' : ('<span class="geneBase" title="R2 Body">' + genomArray[51] + '</span>'));
    genomArray[52] = (!genomArray[52] ? '' : ('<span class="geneBase" title="R2 Paw">' + genomArray[52] + '</span>'));
    genomArray[53] = (!genomArray[53] ? '' : ('<span class="geneBase" title="R2 Hand">' + genomArray[53] + '</span>'));
    genomArray[54] = (!genomArray[54] ? '' : ('<span class="geneBase" title="R2 Leg">' + genomArray[54] + '</span>'));
    genomArray[55] = (!genomArray[55] ? '' : ('<span class="geneBase" title="R2 Feet">' + genomArray[55] + '</span>'));
    genomArray[56] = (!genomArray[56] ? '' : ('<span class="geneBase" title="R2 Tail">' + genomArray[56] + '</span>'));
    genomArray[57] = (!genomArray[57] ? '' : ('<span class="geneBase" title="R2 HairBack">' + genomArray[57] + '</span>'));
    genomArray[58] = (!genomArray[58] ? '' : ('<span class="geneReserved" title="R2 Nose">' + genomArray[58] + '</span>'));
    genomArray[59] = (!genomArray[59] ? '' : ('<span class="geneColor" title="R2 Body Color">' + genomArray[59] + '</span>'));
    genomArray[60] = (!genomArray[60] ? '' : ('<span class="geneColor" title="R2 Big Spots Color">' + genomArray[60] + '</span>'));
    genomArray[61] = (!genomArray[61] ? '' : ('<span class="geneColor" title="R2 Small Spots Color">' + genomArray[61] + '</span>'));
    genomArray[62] = (!genomArray[62] ? '' : ('<span class="geneColor" title="R2 Add Spots Color">' + genomArray[62] + '</span>'));
    genomArray[63] = (!genomArray[63] ? '' : ('<span class="geneColor" title="R2 Eyes Color">' + genomArray[63] + '</span>'));
    $('.genome_line').text("");
    $('.genome_line').append('<div class="mappedGenom">' + genomArray.join('') + '</div>');
}

function achievHider() {
    $('#showcase_wrap.achiev-box-wrap').append('<div id="noAchieved" class="on">Hide completed achievements</div>');

    $('#noAchieved').click(function () {
        if ($(this).hasClass('on')) {
            $(this).removeClass('on');
            $(this).addClass('off');
            $(this).text('Show completed achievements');
            $('.achievement-item-box.completed').hide();
        } else {
            $(this).removeClass('off');
            $(this).addClass('on');
            $(this).text('Hide completed achievements');
            $('.achievement-item-box.completed').show();
        }
    });
}

function customBGs() {
    var dcmCuties = [30040, 4444, 3582, 4948];

    $.each(dcmCuties, function (index, value) {
        if (window.location.pathname == '/pet/' + value) {
            $('.exp_meter .exp_filled.bg_block').addClass('dcm_bg_color_' + value);
            $('.pet_block.bg_block').addClass('dcm_bg_color_' + value);
            $('.pet_block.bg_block .pattern_block').addClass('dcm_bg_' + value);
        }
        if ($('.pet_banner_image[src$="/' + value + '.svg"').length !== 0) {
            $('.pet_banner_image[src$="/' + value + '.svg"').closest('.bg_block').addClass('dcm_bg_color_' + value);
            $('.pet_banner_image[src$="/' + value + '.svg"').closest('.bg_block .pattern_block').addClass('dcm_bg_' + value);
        }
        if ($('.pet_card_image[src$="/' + value + '.svg"').length !== 0) {
            $('.pet_card_image[src$="/' + value + '.svg"').closest('.bg_block').addClass('dcm_bg_color_' + value);
            $('.pet_card_image[src$="/' + value + '.svg"').closest('.bg_block .pattern_block').addClass('dcm_bg_' + value);
        }
    });

}

/*function playerLinkReplacer(){
	 $('.pet_header_owner-name, .pet_header_owner-imageLink, .board-item-user a').each(function(){
		  this.href = this.href.replace(/player\//,"pets/1?search=owner:");
	  });
}*/

function gainedItemsPercentage() {
    var won_matches = $('.adv_statistic_in_card .c100:nth-of-type(2) span').text();
    var items = $('.adv_statistic_in_card .c100:nth-of-type(4) span').text();
    var item_gained_percent = (Math.round(items / won_matches * 100)) > 100 ? 100 : Math.round(items / won_matches * 100);
    $('.adv_statistic_in_card .c100:nth-of-type(4)').removeClass('p100');
    $('.adv_statistic_in_card .c100:nth-of-type(4)').addClass('p' + item_gained_percent);
}

function adventureRecommendator() {
    if (window.location.pathname.indexOf('/pet/') === 0 && $('.mm_power').length === 0) {
        var petLvl = parseInt($('.exp_level').text());
        var power = 0; var attack = 0; var defense = 0; var evasion = 0; var luck = 0; var air = 0; var earth = 0;
        var fire = 0; var energy = 0;
        $('.stat_block_number').each(function () {
            if ($(this).data('tooltip') == 'Air Element') {
                air = parseInt($(this).text());
            }
            else if ($(this).data('tooltip') == 'Water Element') {
                water = parseInt($(this).text());
            }
            else if ($(this).data('tooltip') == 'Earth Element') {
                earth = parseInt($(this).text());
            }
            else if ($(this).data('tooltip') == 'Fire Element') {
                fire = parseInt($(this).text());
            }
            else if ($(this).data('tooltip') == 'Energy Element') {
                energy = parseInt($(this).text());
            }
            else if ($(this).find('.stat_power').length > 0) {
                power = parseInt($(this).find('.stat_power').parent().text());
            }
            else if ($(this).find('.stat_attackBonus').length > 0) {
                attack = parseInt($(this).find('.stat_attackBonus').parent().text());
            }
            else if ($(this).find('.stat_defenceBonus').length > 0) {
                defense = parseInt($(this).find('.stat_defenceBonus').parent().text());
            }
            else if ($(this).find('.stat_evasion').length > 0) {
                evasion = parseInt($(this).find('.stat_evasion').parent().text());
            }
            else if ($(this).find('.stat_critical').length > 0) {
                luck = parseInt($(this).find('.stat_critical').parent().text());
            }
        });

        var mmPw = Math.floor((power * 1.6) + attack + defense + (evasion / 4) + (luck / 4));

        var adv = [
            0,
            (water),
            (energy),
            (fire),
            (air),
            (earth),
            (energy + fire),
            (earth + air),
            (water + fire),
            (energy + fire + earth),
            (energy + fire + earth + water + air)
        ];
        var advMMP = [
            mmPw,
            (1.5 * (water)) + mmPw,
            (1.5 * (energy)) + mmPw,
            (1.5 * (fire)) + mmPw,
            (1.5 * (air)) + mmPw,
            (1.5 * (earth)) + mmPw,
            (1.5 * (energy + fire)) + mmPw,
            (1.5 * (earth + air)) + mmPw,
            (1.5 * (water + fire)) + mmPw,
            (1.5 * (energy + fire + earth)) + mmPw,
            (1.5* (energy + fire + earth + water + air)) + mmPw
        ];
        var adventures = [
            'WindyHills',
            'SnowyMountain',
            'MagicalForest',
            'TheDesert',
            'IvoryTower',
            'Metropolis',
            'Ghetto',
            'GatesOfBabylon',
            'BloodMoonForest',
            'Wasteland',
            'Tavern'
        ];

        var biggest = adv.reduce(function (a, b) {
            return a > b ? a : b;
        });
        var strongIn = 0;
        var strongCounter = 0;
        var adventureModifier = $('.pet_simple_adventure_item').length === 10?0:1;

        for (var i = 0; i <= 10; i++) {
            if (adv[i] > 0) {
                strongIn += adv[i];
                strongCounter++;
            }
            if (adv[i] === biggest) {
                $('.pet_simple_adventure_item:nth-of-type(' + (i + adventureModifier) + ') .petSimpleAdventure').addClass('best');
            }

            $('.pet_simple_adventure_item:nth-of-type(' + (i + adventureModifier) + ')').prop('title', adventures[i] + ' (MMP: ' + (advMMP[i] > 0 ? advMMP[i] : 'none') + ') ' + ((adv[i] == biggest) ? '- Your Cutie is strongest here!' : '') + ((i > petLvl) ? ' - Your Cutie cannot go here yet :(' : ''));
            // var dom = $('<div class="adv_str stat_block_number' + ((adv[i] == biggest) ? " best" : "") + ((i + 1 > petLvl) ? " tooHigh" : "") + '" title="' + adventures[i + 1] + ' (MMP: ' + (advMMP[i]>0?advMMP[i]:"none") + ') ' + ((adv[i] == biggest) ? " - Your Cutie is strongest here!" : "") + ((i + 1 > petLvl) ? " - Your Cutie cannot go here yet :(" : "") + '"><div class="clear"></div></div>');
            // dom.text('A' + (i + 1) + ':' + adv[i]);
            // $('.exp_block').append(dom);
        }
        var dom2 = $('<div class="stat_block_number adv_str" title="Average strength on the adventures where cutie is strong. (has at least +1 strength there)"><div class="clear"></div></div>');
        var avgStr = strongCounter ? (strongIn / strongCounter).toFixed(1) : 0;
        dom2.text('AVG:' + avgStr);
        $('.pet_simple_adventure_item:first-of-type').closest('.pet_section_content').prev('.pet_section_line_header').append(dom2);


        var dom3 = $('<div class="stat_block_number mm_power" title="Base matchmaking power (power*1.6 + attack + defense + evasion/4 + luck/4)"><svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="header/adventures/normal" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Group-5" transform="translate(3.000000, 2.000000)" fill="#FFFFFF"><g id="Group-7" transform="translate(4.000000, 0.000000)"><path d="M0.357936394,13.5781251 L9.65413702,13.5781251 C9.74133988,13.5781251 9.81203176,13.5074332 9.81203176,13.4202304 C9.81203176,13.3936546 9.80532382,13.3675087 9.79252948,13.3442154 L5.14442916,4.8819094 C5.10244725,4.80547736 5.00645377,4.77755001 4.93002173,4.81953193 C4.90372522,4.83397584 4.88208817,4.85561289 4.86764426,4.8819094 L0.219543941,13.3442154 C0.177562028,13.4206474 0.205489375,13.5166409 0.281921416,13.5586228 C0.305214721,13.5714172 0.331360594,13.5781251 0.357936394,13.5781251 Z" id="Path-7"></path><path d="M0.292318821,15.1675296 L9.90191892,15.1675296 C9.98912177,15.1675296 10.0598137,15.2382215 10.0598137,15.3254243 C10.0598137,15.3690369 10.0417747,15.4107072 10.0099745,15.4405536 L5.20517442,19.9501396 C5.144421,20.0071602 5.04981674,20.0071602 4.98906332,19.9501396 L0.184263273,15.4405536 C0.120679139,15.3808762 0.11751213,15.2809529 0.177189561,15.2173688 C0.207035928,15.1855686 0.248706213,15.1675296 0.292318821,15.1675296 Z" id="Path-8"></path><g id="Group" transform="translate(5.750000, 0.000000)"><path d="M5.97583506,0.617936579 L5.97583506,2.31332766 C5.97583506,2.38774132 5.92387871,2.45205473 5.85112732,2.46769531 L0.165703146,3.68998601 C0.0804482471,3.70831468 -0.00352282751,3.65406025 -0.0218514986,3.56880535 C-0.0368649897,3.49897085 -0.00312485989,3.42775489 0.0604254726,3.39514173 L5.74584965,0.477459955 C5.82343274,0.437645372 5.91860237,0.468262803 5.95841695,0.545845901 C5.96986433,0.568152377 5.97583506,0.592864257 5.97583506,0.617936579 Z" id="Path-4" transform="translate(2.987918, 2.073872) scale(-1, 1) translate(-2.987918, -2.073872) "></path><path d="M0.771786241,5.61230897 L2.3900495,12.4319616 C2.41018314,12.5168084 2.49528657,12.5692688 2.58013334,12.5491351 C2.62292413,12.5389811 2.65954107,12.5114405 2.68116614,12.4731454 L7.2295868,4.41851353 C7.27246561,4.34258102 7.24567028,4.24626542 7.16973778,4.20338661 C7.13677207,4.184771 7.09821505,4.17861979 7.06109348,4.18605399 L0.894409557,5.4210332 C0.808904505,5.43815699 0.753470534,5.5213541 0.770594318,5.60685915 C0.770959501,5.60868264 0.77135687,5.61049953 0.771786241,5.61230897 Z" id="Path-5" transform="translate(4.008756, 8.368208) scale(-1, 1) translate(-4.008756, -8.368208) "></path><path d="M6.4581601,9.27988262 L6.4581601,14.8348891 C6.4581601,14.9220919 6.52885198,14.9927838 6.61605484,14.9927838 C6.64518759,14.9927838 6.67375238,14.9847238 6.69858832,14.9694958 L7.91602723,14.2230289 C7.97494333,14.1869047 8.00352084,14.1166639 7.98655883,14.0496687 L6.76911992,9.24112919 C6.747717,9.15659368 6.66183692,9.10541461 6.57730141,9.12681753 C6.50723556,9.14455699 6.4581601,9.20760598 6.4581601,9.27988262 Z" id="Path-6" transform="translate(7.224780, 12.057367) scale(-1, 1) translate(-7.224780, -12.057367) "></path><path d="M3.3870383,15.7463003 L2.64200935,16.2029615 C2.56766144,16.2485326 2.54433325,16.3457462 2.58990437,16.4200941 C2.60231369,16.4403395 2.61912956,16.4575253 2.63910023,16.4703721 L6.76439789,19.1241123 C6.83773679,19.1712901 6.93543487,19.1500823 6.98261265,19.0767434 C7.02414296,19.0121837 7.01322329,18.927109 6.9567348,18.8751304 L3.5764661,15.7647289 C3.52453647,15.7169451 3.44720438,15.7094218 3.3870383,15.7463003 Z" id="Path-9" transform="translate(4.787163, 17.436128) scale(-1, 1) translate(-4.787163, -17.436128) "></path></g></g><g id="Group" transform="translate(4.200012, 10.000000) scale(-1, 1) translate(-4.200012, -10.000000) translate(0.200012, 0.000000)"><path d="M5.97583506,0.617936579 L5.97583506,2.31332766 C5.97583506,2.38774132 5.92387871,2.45205473 5.85112732,2.46769531 L0.165703146,3.68998601 C0.0804482471,3.70831468 -0.00352282751,3.65406025 -0.0218514986,3.56880535 C-0.0368649897,3.49897085 -0.00312485989,3.42775489 0.0604254726,3.39514173 L5.74584965,0.477459955 C5.82343274,0.437645372 5.91860237,0.468262803 5.95841695,0.545845901 C5.96986433,0.568152377 5.97583506,0.592864257 5.97583506,0.617936579 Z" id="Path-4" transform="translate(2.987918, 2.073872) scale(-1, 1) translate(-2.987918, -2.073872) "></path><path d="M0.771786241,5.61230897 L2.3900495,12.4319616 C2.41018314,12.5168084 2.49528657,12.5692688 2.58013334,12.5491351 C2.62292413,12.5389811 2.65954107,12.5114405 2.68116614,12.4731454 L7.2295868,4.41851353 C7.27246561,4.34258102 7.24567028,4.24626542 7.16973778,4.20338661 C7.13677207,4.184771 7.09821505,4.17861979 7.06109348,4.18605399 L0.894409557,5.4210332 C0.808904505,5.43815699 0.753470534,5.5213541 0.770594318,5.60685915 C0.770959501,5.60868264 0.77135687,5.61049953 0.771786241,5.61230897 Z" id="Path-5" transform="translate(4.008756, 8.368208) scale(-1, 1) translate(-4.008756, -8.368208) "></path><path d="M6.4581601,9.27988262 L6.4581601,14.8348891 C6.4581601,14.9220919 6.52885198,14.9927838 6.61605484,14.9927838 C6.64518759,14.9927838 6.67375238,14.9847238 6.69858832,14.9694958 L7.91602723,14.2230289 C7.97494333,14.1869047 8.00352084,14.1166639 7.98655883,14.0496687 L6.76911992,9.24112919 C6.747717,9.15659368 6.66183692,9.10541461 6.57730141,9.12681753 C6.50723556,9.14455699 6.4581601,9.20760598 6.4581601,9.27988262 Z" id="Path-6" transform="translate(7.224780, 12.057367) scale(-1, 1) translate(-7.224780, -12.057367) "></path><path d="M3.3870383,15.7463003 L2.64200935,16.2029615 C2.56766144,16.2485326 2.54433325,16.3457462 2.58990437,16.4200941 C2.60231369,16.4403395 2.61912956,16.4575253 2.63910023,16.4703721 L6.76439789,19.1241123 C6.83773679,19.1712901 6.93543487,19.1500823 6.98261265,19.0767434 C7.02414296,19.0121837 7.01322329,18.927109 6.9567348,18.8751304 L3.5764661,15.7647289 C3.52453647,15.7169451 3.44720438,15.7094218 3.3870383,15.7463003 Z" id="Path-9" transform="translate(4.787163, 17.436128) scale(-1, 1) translate(-4.787163, -17.436128) "></path></g></g></g></svg><span></span><div class="clear"></div></div>');

        dom3.find('span').text(mmPw);
        $('.exp_block .line_secetion_end').before(dom3);
    }
}

function cutieFilterOnPage() {
    if($('.info_icon').length === 0) {
        var dom = $('<a class="info_icon" href="#"></a>');
        var pet_id = $('.pet_banner_container').data('pet_id');
        dom.attr('href', '/activity?search=pet_id:' + pet_id);
        $('.page_pet .pet_banner_icons').prepend(dom);
    }
}

function cutieChildrenCount() {
    var childBlock = $('.line_secetion_subheader:contains("Children")');
    var children = childBlock.siblings('.pet_section_content').find('.pet_list-items .pet_list-item').length;
    var childrenRoyal = childBlock.siblings('.pet_section_content').find('.pet_list-items > div[class*="royal"]').length;
    var childrenCountText = 'Children ( Σ ' + children + ' / 👑 ' + childrenRoyal + ' )';
    $('.line_secetion_subheader:contains("Children")').text(childrenCountText);
}

function levelPlacer() {
    if ($('#pet_lvl').length === 0) {
        var level = $('.exp_level').text();
        var lvlText = '<span id="pet_lvl" data-val="3">' + level + '</span>';
        $('.exp_level').text('');
        $('.exp_level').append(lvlText);
    }
}

function birthdayCake() {
    if (window.location.pathname.indexOf('/pet/') === 0 && $('.cutie_bdaycake').length == 0) {
        var bday = new Date($('.pet_profile .Container>.line_secetion_text').text().replace( /(\d{2}).(\d{2}).(\d{4})/, '$2/$1/$3'));
        var today = new Date();


        if(bday.getMonth() === today.getMonth() && bday.getDate() === today.getDate()) {
            var cake = '<span class="info_icon cutie_bdaycake" title="Your cutie has birthday today! Cheers! \\o/" style="background:url(https://dcm.verychard.com/resources/bdaycake.svg);"></span>';
            $('.pet_banner_icons').prepend(cake);
        }
    }
}

function footPrint() {
    if ($('#dcmInfo').length === 0) {
        $('.copyright').after('<div style="margin-top:18px;color:#fff;opacity:0.5;font-size: 16px;" id="dcmInfo">DCM addon & theme by VeRychard</div>');
    }
}


$(document).ready(function () {

    var gasOn = false;
    var themeOn = false;
    var genomeMapperOn = false;
    var adventureRecommendatorOn = false;
    var customBGsOn = false;
    var genomeMapperOn = false;
    var autoToolsOn = false;
    var sideMenuOn = false;
    chrome.storage.sync.get(['gasTracker'], function (result) {
        gasOn = result.gasTracker;
    });
    chrome.storage.sync.get(['darkTheme'], function (result) {
        themeOn = result.darkTheme;
    });
    chrome.storage.sync.get(['genomeMapper'], function (result) {
        genomeMapperOn = result.genomeMapper == 'on';
    });
    chrome.storage.sync.get(['adventureRecommend'], function (result) {
        adventureRecommendatorOn = result.adventureRecommend;
    });
    chrome.storage.sync.get(['customBG'], function (result) {
        customBGsOn = result.customBG;
    });
    chrome.storage.sync.get(['genomeMapper'], function (result) {
        genomeMapperOn = result.genomeMapper;
    });
    chrome.storage.sync.get(['autoTools'], function (result) {
        autoToolsOn = result.autoTools;
    });
    chrome.storage.sync.get(['sideMenu'], function (result) {
        sideMenuOn = result.sideMenu;
    });


    if (!document.getElementById("dcmPagescript")) {
        var script = document.createElement("script");
        script.setAttribute('id', 'dcmPagescript')
        script.src = chrome.extension.getURL("pagescript.js");
        document.documentElement.appendChild(script);
    }
    if (themeOn == true) {
        if ($('head').find('link').eq(-2).attr('href').indexOf('dc_theme.css') < 0) {
            document.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" type="text/css" href="https://dcm.verychard.com/dcm_theme.css">');
        }
    }
    if (gasOn == true) {
        getGasPrice();
    }

    if (genomeMapperOn == true) {
        genomeMapper();
    }

   /* if (adventureRecommendatorOn == true) {
        adventureRecommendator();
    }
    if (autoToolsOn == true) {
        autoTools();
    }*/

    if (customBGsOn == true) {
        if ($('head').find('link').eq(-1).attr('href').indexOf('dc_bgs.css') < 0) {
            document.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" type="text/css" href="' + chrome.runtime.getURL("dc_bgs.css") + '">');
        }
        customBGs();
    }

    /*if (sideMenuOn == true) {
        extraMenus();
        friendList();
    }*/
    birthdayCake();
    gainedItemsPercentage();
    achievHider();
    cutieFilterOnPage();
    cutieChildrenCount();
    levelPlacer();
    footPrint();
});

// var oldXHR = window.XMLHttpRequest;
//
// function newXHR() {
//     var realXHR = new oldXHR();
//     realXHR.addEventListener("readystatechange", function() {
//         if(realXHR.readyState==4 && !realXHR.responseURL.endsWith('/rest/1/ping') && !realXHR.responseURL.endsWith('/rest/1/auth_token') && !realXHR.responseURL.endsWith('/rest/1/adventure_start') && realXHR.responseURL.startsWith('https://blockchaincuties.com/rest')){
//             console.log(realXHR);
//
//             //alert('READY');
//         }
//         else if(realXHR.readyState==4 && realXHR.responseURL.endsWith('/rest/1/auth_token')){
//             var resp = JSON.parse(realXHR.response);
//             var lastActivityId = resp.user.lastSeenActivityId;
//             console.log(resp.user);
//         }
//     }, false);
//     return realXHR;
// }
// window.XMLHttpRequest = newXHR;


var targetNode = document.getElementsByClassName('loading_ani')[0];
var config = {attributes: true};
var switcher = 0;
chrome.storage.sync.get(['gasTracker'], function (result) {
    gasOn = result.gasTracker;
});
chrome.storage.sync.get(['darkTheme'], function (result) {
    themeOn = result.darkTheme;
});
chrome.storage.sync.get(['genomeMapper'], function (result) {
    genomeMapperOn = result.genomeMapper == 'on';
});
chrome.storage.sync.get(['adventureRecommend'], function (result) {
    adventureRecommendatorOn = result.adventureRecommend;
});
chrome.storage.sync.get(['customBG'], function (result) {
    customBGsOn = result.customBG;
});
chrome.storage.sync.get(['genomeMapper'], function (result) {
    genomeMapperOn = result.genomeMapper;
});
chrome.storage.sync.get(['autoTools'], function (result) {
    autoToolsOn = result.autoTools;
});
chrome.storage.sync.get(['sideMenu'], function (result) {
    sideMenuOn = result.sideMenu;
});

var callback = function (mutationsList, observer) {
    for (var mutation of mutationsList) {
        if (mutation.type == 'attributes' && $('.loading_ani').is(':visible')) {
            switcher = 1;
        } else if (mutation.type == 'attributes' && switcher == 1 && !$('.loading_ani').is(':visible')) {
            switcher = 2;


            if (!document.getElementById("dcmPagescript")) {
                var script = document.createElement("script");
                script.setAttribute('id', 'dcmPagescript')
                script.src = chrome.extension.getURL("pagescript.js");
                document.documentElement.appendChild(script);
            }
            if (themeOn == true) {
                if ($('head').find('link').eq(-2).attr('href').indexOf('dc_theme.css') < 0) {
                    document.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" type="text/css" href="https://dcm.verychard.com/dcm_theme.css">');
                }
            }
            if (gasOn == true) {
                getGasPrice();
            }

            if (genomeMapperOn == true) {
                genomeMapper();
            }

           /* if (adventureRecommendatorOn == true) {
                adventureRecommendator();
            }
            if (autoToolsOn == true) {
                autoTools();
            }*/

            if (customBGsOn == true) {
                if ($('head').find('link').eq(-1).attr('href').indexOf('dc_bgs.css') < 0) {
                    document.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" type="text/css" href="' + chrome.runtime.getURL("dc_bgs.css") + '">');
                }
                customBGs();
            }

            /*if (sideMenuOn == true) {
                extraMenus();
                friendList();
            }*/
            birthdayCake();
            gainedItemsPercentage();
            achievHider();
            cutieFilterOnPage();
            cutieChildrenCount();
            levelPlacer();
            footPrint();
        }
    }
};

// Create an observer instance linked to the callback function
var observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);