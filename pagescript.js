function currencyChanger() {
    //var ethPriceHuf = res.data.quotes.HUF.price;
    var ethPriceUsd = configDynamic.usdPrices.ETHEREUM;
    var eosPriceUsd = configDynamic.usdPrices.EOS;
    var trxPriceUsd = configDynamic.usdPrices.TRON;
    var neoPriceUsd = configDynamic.usdPrices.NEO;


    $('span[data-blockchain="ETHEREUM"]').each(function () {
        var ethVal = parseFloat($(this).data('blockchain_price')) / 1000000000000000000;
        //var priceHuf = Math.ceil(ethVal * ethPriceHuf) + ' HUF';
        var priceUsd = (Math.round((ethVal * ethPriceUsd) * 100) / 100) + ' USD';
        $(this).parents('.pet_card_status').attr('title', /*priceHuf + ' / ' +*/ priceUsd);
        $(this).parents('.pet_bid-box').attr('title', /*priceHuf + ' / ' +*/ priceUsd);
        $(this).parents('.pet_banner-status').attr('title', /*priceHuf + ' / ' +*/ priceUsd);
        $(this).parents('.pet_status-note').attr('title', /*priceHuf + ' / ' +*/ priceUsd);
        $(this).parents('td').attr('title', /*priceHuf + ' / ' +*/ priceUsd);
    });

    $('span[data-blockchain="TRON"]').each(function () {
        var trxVal = parseFloat($(this).data('blockchain_price')) / 1000000;
        //var priceHuf = Math.ceil(ethVal * trxPriceHuf) + ' HUF';
        var priceUsd = (Math.round((trxVal * trxPriceUsd) * 100) / 100) + ' USD';
        $(this).parents('.pet_card_status').attr('title', /*priceHuf + ' / ' +*/ priceUsd);
        $(this).parents('.pet_bid-box').attr('title', /*priceHuf + ' / ' +*/ priceUsd);
        $(this).parents('.pet_banner-status').attr('title', /*priceHuf + ' / ' +*/ priceUsd);
        $(this).parents('.pet_status-note').attr('title', /*priceHuf + ' / ' +*/ priceUsd);
        $(this).parents('td').attr('title', /*priceHuf + ' / ' +*/ priceUsd);
    });

    $('span[data-blockchain="EOS"]').each(function () {
        var eosVal = parseFloat($(this).data('blockchain_price'));
        //var priceHuf = Math.ceil(eosVal * eosPriceHuf) + ' HUF';
        var priceUsd = (Math.round((eosVal * eosPriceUsd) * 100) / 100) + ' USD';
        $(this).parents('.pet_card_status').attr('title', /*priceHuf + ' / ' +*/ priceUsd);
        $(this).parents('.pet_bid-box').attr('title', /*priceHuf + ' / ' +*/ priceUsd);
        $(this).parents('.pet_banner-status').attr('title', /*priceHuf + ' / ' +*/ priceUsd);
        $(this).parents('.pet_status-note').attr('title', /*priceHuf + ' / ' +*/ priceUsd);
        $(this).parents('td').attr('title', /*priceHuf + ' / ' +*/ priceUsd);
    });

    $('span[data-blockchain="NEO"]').each(function () {
        var neoVal = parseFloat($(this).data('blockchain_price'));
        //var priceHuf = Math.ceil(eosVal * eosPriceHuf) + ' HUF';
        var priceUsd = (Math.round((neoVal * neoPriceUsd) * 100) / 100) + ' USD';
        $(this).parents('.pet_card_status').attr('title', /*priceHuf + ' / ' +*/ priceUsd);
        $(this).parents('.pet_bid-box').attr('title', /*priceHuf + ' / ' +*/ priceUsd);
        $(this).parents('.pet_banner-status').attr('title', /*priceHuf + ' / ' +*/ priceUsd);
        $(this).parents('.pet_status-note').attr('title', /*priceHuf + ' / ' +*/ priceUsd);
        $(this).parents('td').attr('title', /*priceHuf + ' / ' +*/ priceUsd);
    });

    $('.paw-shop-button').each(function () {
        if ($(this).data('eth')) {
            var ethVal = parseFloat($(this).data('eth'));
            //var priceHuf = Math.ceil(ethVal * ethPriceHuf) + ' HUF';
            var priceUsd = (Math.round((ethVal * ethPriceUsd) * 100) / 100) + ' USD';
            $(this).attr('title', /*priceHuf + ' / ' +*/ priceUsd);
        }
    });

    if ($('.SetAuctionPage #number1').val()) {
        var priceVal = $('.SetAuctionPage #number1').val();
        //var priceHuf = Math.ceil(ethVal * ethPriceHuf) + ' HUF';
        if ($('.blockchain_icon_TRON').is(':visible') || $("label[for='number1']:contains('TRON')").length > 0) {
            var priceUsd = (Math.round((priceVal * trxPriceUsd) * 100) / 100) + ' USD';
        } else if ($('.blockchain_icon_ETHEREUM').is(':visible') || $("label[for='number1']:contains('ETHEREUM')").length > 0) {
            var priceUsd = (Math.round((priceVal * ethPriceUsd) * 100) / 100) + ' USD';
        } else if ($('.blockchain_icon_EOS').is(':visible') || $("label[for='number1']:contains('EOS')").length > 0) {
            var priceUsd = (Math.round((priceVal * eosPriceUsd) * 100) / 100) + ' USD';
        } else if ($('.blockchain_icon_NEO').is(':visible') || $("label[for='number1']:contains('NEO')").length > 0) {
            var priceUsd = (Math.round((priceVal * neoPriceUsd) * 100) / 100) + ' USD';
        }
        if ($('#convertedItemPriceStart').length) {
            if (priceUsd) {
                $('#convertedItemPriceStart').text( /*priceHuf + ' / ' +*/ priceUsd);
            }
        } else {
            if (priceUsd) {
                $('.SetAuctionPage #number1').after('<div id="convertedItemPriceStart">' /*+ priceHuf + ' / '*/ + priceUsd + '</div>');
            }
        }
    }

    if ($('.SetAuctionPage #number2').val()) {
        var priceVal = $('.SetAuctionPage #number2').val();
        //var priceHuf = Math.ceil(ethVal * ethPriceHuf) + ' HUF';
        if ($('.blockchain_icon_TRON').is(':visible') || $("label[for='number2']:contains('TRON')").length > 0) {
            var priceUsd = (Math.round((priceVal * trxPriceUsd) * 100) / 100) + ' USD';
        } else if ($('.blockchain_icon_ETHEREUM').is(':visible') || $("label[for='number2']:contains('ETHEREUM')").length > 0) {
            var priceUsd = (Math.round((priceVal * ethPriceUsd) * 100) / 100) + ' USD';
        } else if ($('.blockchain_icon_EOS').is(':visible') || $("label[for='number2']:contains('EOS')").length > 0) {
            var priceUsd = (Math.round((priceVal * eosPriceUsd) * 100) / 100) + ' USD';
        } else if ($('.blockchain_icon_NEO').is(':visible') || $("label[for='number2']:contains('NEO')").length > 0) {
            var priceUsd = (Math.round((priceVal * neoPriceUsd) * 100) / 100) + ' USD';
        }
        if ($('#convertedItemPriceEnd').length) {
            if (priceUsd) {
                $('#convertedItemPriceEnd').text( /*priceHuf + ' / ' +*/ priceUsd);
            }
        } else {
            if (priceUsd) {
                $('.SetAuctionPage #number2').after('<div id="convertedItemPriceEnd">' /*+ priceHuf + ' / '*/ + priceUsd + '</div>');
            }
        }
    }
}


function getSetBonuses() {
    // if (!$('#dcmExtras').hasClass('loaded')) {
        var itemSets = configConst.itemSets;
        var items = configConst.items;
        var setBonuses = [];

        $.each(itemSets, function (id, set) {
            var setName = set.name;
            if (!setName.match("^Football") && !setName.match("^Valentines")) {
                setBonuses.push({
                    name: setName,
                    attack: 0,
                    defence: 0,
                    criticalHit: 0,
                    evasion: 0,
                    exp: 0,
                    rewardDropChance: 0,
                    mmp: 0
                });
                var objIndex = setBonuses.findIndex((set => set.name == setName));

                $.each(set.bonuses, function (id, itemBonus) {

                    setBonuses[objIndex].attack += itemBonus.stats.attack || 0;
                    setBonuses[objIndex].defence += itemBonus.stats.defence || 0;
                    setBonuses[objIndex].criticalHit += itemBonus.stats.criticalHit || 0;
                    setBonuses[objIndex].evasion += itemBonus.stats.evasion || 0;
                    setBonuses[objIndex].exp += itemBonus.stats.exp || 0;
                    setBonuses[objIndex].rewardDropChance += itemBonus.stats.rewardDropChance || 0;
                });

                $.each(set.items, function (id, itemName) {
                    $.each(items, function (id, item) {
                        if (item.name === itemName) {
                            setBonuses[objIndex].attack += item.stats.attack || 0;
                            setBonuses[objIndex].defence += item.stats.defence || 0;
                            setBonuses[objIndex].criticalHit += item.stats.criticalHit || 0;
                            setBonuses[objIndex].evasion += item.stats.evasion || 0;
                            setBonuses[objIndex].exp += item.stats.exp || 0;
                            setBonuses[objIndex].rewardDropChance += item.stats.rewardDropChance || 0;
                            return;
                        }
                    });
                });
                setBonuses[objIndex].criticalHit = Math.round((setBonuses[objIndex].criticalHit.toFixed(2)) * 100);
                setBonuses[objIndex].evasion = Math.round((setBonuses[objIndex].evasion.toFixed(2)) * 100);
                setBonuses[objIndex].exp = Math.round((setBonuses[objIndex].exp.toFixed(2)) * 100);
                setBonuses[objIndex].rewardDropChance = Math.round((setBonuses[objIndex].rewardDropChance.toFixed(2)) * 100);
                setBonuses[objIndex].mmp = setBonuses[objIndex].attack + setBonuses[objIndex].defence + (setBonuses[objIndex].criticalHit / 4) + (setBonuses[objIndex].evasion / 4);
            }
        });

        localStorage.setItem('setBonuses', JSON.stringify(setBonuses));
        setBonuses.sort(function (a, b) {
            return b.mmp - a.mmp
        });
        createTable(setBonuses, '#dcmExtras', [{name: 'Name', id: 'dcmSortName', field: 'name'}, {
            name: 'Attack',
            id: 'dcmSortAtk', field: 'attack'
        }, {name: 'Defense', id: 'dcmSortDef', field: 'defence'}, {
            name: 'Luck',
            id: 'dcmSortLuck',
            field: 'criticalHit'
        }, {
            name: 'Evasion',
            id: 'dcmSortEva', field: 'evasion'
        }, {name: 'XP', id: 'dcmSortXp', field: 'exp'}, {
            name: 'Drop',
            id: 'dcmSortDrop',
            field: 'rewardDropChance'
        }, {name: 'MMP', id: 'dcmSortMmp', field: 'mmp'}]);

        $('#dcmExtras').addClass('loaded');
    // }
}

function sortBonus(listener, field) {
    var localSetBonuses = localStorage.getItem('setBonuses');
    if (localSetBonuses) {
        localSetBonuses = JSON.parse(localSetBonuses);
        if ($(listener).hasClass('asc')) {
            localSetBonuses.sort(function (a, b) {
                if (typeof b[field] == "string") {
                    return b[field].localeCompare(a[field]);
                }
                return b[field] - a[field]
            });
        } else {
            localSetBonuses.sort(function (a, b) {
                if (typeof a[field] == "string") {
                    return a[field].localeCompare(b[field]);
                }
                return a[field] - b[field]
            });
        }
        $(listener).toggleClass('asc');

        $('#dcmExtras tbody').replaceWith(createTableBody(localSetBonuses));

    }
}

function createTable(tableData, targetElement, headers) {
    var table = document.createElement('table');
    var tableId = targetElement.substr(1) + '_table';
    table.setAttribute("id", tableId);

    table.appendChild(createTableHead(headers));
    var tableBody = createTableBody(tableData);

    table.appendChild(tableBody);
    $(targetElement).append(table);

    $.each(headers, function (id, header) {
        $('#' + header.id).click(function () {
            sortBonus('#' + header.id, header.field);
        });
    });
}

function createTableHead(headers) {
    var headerRow = document.createElement('thead');
    headerRow = headerRow.appendChild(document.createElement('tr'));

    $.each(headers, function (id, header) {
        var heading = document.createElement('th');
        heading.setAttribute("id", header.id);
        heading.appendChild(document.createTextNode(header.name));
        headerRow.appendChild(heading);
    });

    return headerRow;
}

function createTableBody(tableData) {

    var tableBody = document.createElement('tbody');

    $.each(tableData, function (id, rowData) {
        var row = document.createElement('tr');

        $.each(rowData, function (name, value) {
            if (typeof value == "string") {
                value = value.replace("_Set", "");
                switch (value) {
                    case 'Tron2':
                        value = "Cyan Tron Power";
                        break;
                    case 'Tron1':
                        value = "Red Tron Power";
                        break;
                    case 'Desert':
                        value = "Sultan";
                        break;
                    case 'BM':
                        value = "Bitcoin Man";
                        break;
                    case 'CR':
                        value = "Captain Ripple";
                        break;
                    case 'DS':
                        value = "Dark Souls";
                        break;
                    case 'TW':
                        value = "Trust Wallet";
                        break;
                }
            }
            var cell = document.createElement('td');
            cell.appendChild(document.createTextNode(value));
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });

    return tableBody;
}

function blacklistAndGroups() {
    if (window.location.pathname.startsWith('/pets_adventure')) {

        var blackList = localStorage.getItem('blackList');
        var advPotList = localStorage.getItem('advPotList');
        var advPotGrList = localStorage.getItem('advPotGrList');
        var energyDrList = localStorage.getItem('energyDrList');

        if (!blackList) {
            blackList = [];
            localStorage.setItem('blackList', JSON.stringify([]));
        } else {
            blackList = JSON.parse(blackList);
        }
        if (!advPotList) {
            advPotList = [];
            localStorage.setItem('advPotList', JSON.stringify([]));
        } else {
            advPotList = JSON.parse(advPotList);
        }
        if (!advPotGrList) {
            advPotGrList = [];
            localStorage.setItem('advPotGrList', JSON.stringify([]));
        } else {
            advPotGrList = JSON.parse(advPotGrList);
        }
        if (!energyDrList) {
            energyDrList = [];
            localStorage.setItem('energyDrList', JSON.stringify([]));
        } else {
            energyDrList = JSON.parse(energyDrList);
        }


        $('.card-wrapper').each(function () {
            if ($(this).children('a.quick-slot-wrap').attr('href')) {
                // var cutieId = $(this).find('.quick-slot-mobile img:first-of-type').data('pet_id');
                var cutieId = $(this).children('a.quick-slot-wrap').attr('href').replace('/pet/', '');

                if (localStorage.getItem('blackList').indexOf(cutieId) >= 0) {
                    $(this).append('<div class="at_actions"><div class="at_bl at_action disabled" data-cutie-id = "' + cutieId + '"  title="Remove Cutie from BlackList"><i class="fa fa-ban" aria-hidden ="true"></i></div></div>');
                } else {
                    $(this).append('<div class="at_actions"><div class="at_bl at_action" data-cutie-id="' + cutieId + '" title="Add Cutie to BlackList"><i class="fa fa-ban" aria-hidden="true"></i></div></div>');
                }


                if (localStorage.getItem('advPotList').indexOf(cutieId) >= 0) {
                    $(this).find('.at_actions').prepend('<div class="at_ap at_action active" data-cutie-id="' + cutieId + '" title="Remove Cutie from Adventure Potion list"><img src="/static/items/png/ElixirAdventure.png"></div>');
                } else {
                    $(this).find('.at_actions').prepend('<div class="at_ap at_action" data-cutie-id="' + cutieId + '" title="Add Cutie to Adventure Potion list"><img src="/static/items/png/ElixirAdventure.png"></div>');
                }

                if (localStorage.getItem('advPotGrList').indexOf(cutieId) >= 0) {
                    $(this).find('.at_actions').prepend('<div class="at_apg at_action active" data-cutie-id="' + cutieId + '" title="Remove Cutie from Grand Adventure Potion list"><img src="/static/items/png/ElixirAdventureGrand.png"></div>');
                } else {
                    $(this).find('.at_actions').prepend('<div class="at_apg at_action" data-cutie-id="' + cutieId + '" title="Add Cutie to Grand Adventure Potion list"><img src="/static/items/png/ElixirAdventureGrand.png"></div>');
                }


                if (localStorage.getItem('energyDrList').indexOf(cutieId) >= 0) {
                    $(this).find('.at_actions').prepend('<div class="at_nrg at_action active" data-cutie-id="' + cutieId + '" title="Remove Cutie from Energy Drink list"><img src="/static/items/png/ElixirEnergy.png"></div>');
                } else {
                    $(this).find('.at_actions').prepend('<div class="at_nrg at_action" data-cutie-id="' + cutieId + '" title="Add Cutie to Energy Drink list"><img src="/static/items/png/ElixirEnergy.png"></div>');
                }


            }
        });


        $('.at_bl').click(function () {
            if (blackList.indexOf($(this).data('cutie-id')) >= 0) {
                $(this).removeClass('disabled');
                $(this).attr('title', 'Add Cutie to BlackList');
                $('#at_msg').text('Cutie #' + $(this).data('cutie-id') + ' has been removed from BlackList');
                blackList = arrayRemove(blackList, $(this).data('cutie-id'));
            } else {
                $(this).addClass('disabled');
                $(this).attr('title', 'Remove Cutie from BlackList');
                $('#at_msg').text('Cutie #' + $(this).data('cutie-id') + ' has been added from BlackList');
                blackList.push($(this).data('cutie-id'));
            }
            localStorage.setItem('blackList', JSON.stringify(blackList));
        });


        $('.at_ap').click(function () {
            if ($.inArray($(this).data('cutie-id'), advPotList) !== -1) {
                $(this).removeClass('active');
                $(this).attr('title', 'Add Cutie to Adventure Potion List');

                advPotList = arrayRemove(advPotList, $(this).data('cutie-id'));
                $('#at_msg').text('Cutie #' + $(this).data('cutie-id') + ' has been removed from Adventure Potion List');

            } else {
                $(this).addClass('active');
                $(this).attr('title', 'Remove Cutie from Adventure Potion List');

                advPotList.push($(this).data('cutie-id'));
                $('#at_msg').text('Cutie #' + $(this).data('cutie-id') + ' has been added to Adventure Potion List');

            }

            localStorage.setItem('advPotList', JSON.stringify(advPotList));
        });


        $('.at_apg').click(function () {
            if (advPotGrList.indexOf($(this).data('cutie-id')) >= 0) {
                $(this).removeClass('active');
                $(this).attr('title', 'Add Cutie to Grand Adventure Potion List');
                $('#at_msg').text('Cutie #' + $(this).data('cutie-id') + ' has been removed from Grand Adventure Potion List');
                advPotGrList = arrayRemove(advPotGrList, $(this).data('cutie-id'));
            } else {
                $(this).addClass('active');
                $(this).attr('title', 'Remove Cutie from Grand Adventure Potion List');
                $('#at_msg').text('Cutie #' + $(this).data('cutie-id') + ' has been added from Grand Adventure Potion List');
                advPotGrList.push($(this).data('cutie-id'));
            }
            localStorage.setItem('advPotGrList', JSON.stringify(advPotGrList));
        });

        $('.at_nrg').click(function () {
            if (energyDrList.indexOf($(this).data('cutie-id')) >= 0) {
                $(this).removeClass('active');
                $(this).attr('title', 'Add Cutie to Energy Drink List');
                $('#at_msg').text('Cutie #' + $(this).data('cutie-id') + ' has been removed from Energy Drink List');
                energyDrList = arrayRemove(energyDrList, $(this).data('cutie-id'));
            } else {
                $(this).addClass('active');
                $(this).attr('title', 'Remove Cutie from Energy Drink List');
                $('#at_msg').text('Cutie #' + $(this).data('cutie-id') + ' has been added from Energy Drink List');
                energyDrList.push($(this).data('cutie-id'));
            }
            localStorage.setItem('energyDrList', JSON.stringify(energyDrList));
        });
    }
}

function batchSend(prePotion) {
    var cuties = JSON.parse(localStorage.getItem('adventurers'));
    var count = 0;
    var totalCount = Object.keys(cuties).length;

    var playerId = localStorage.getItem('playerId');
    if (totalCount > 0) {
        $('#at_msg').text('Will try to send ' + totalCount + ' cuties to adventure.');


        // TODO if prepotion, check unread  notifications before sending, and then wait if not enough..


        $.each(cuties, function (pet, adventure) {
            if (pet && adventure) {
                petCheck(pet, accessToken,
                    function (resCutie) {
                        if (resCutie.adventure == undefined && resCutie.owner.id == playerId) {

                            $('#at_msg').text('giving drink to #' + pet);
                            if (prePotion) {
                                equipCuties([resCutie.id], prePotion, accessToken);
                                setTimeout(
                                    function () {
                                        $('#at_msg').text('sending #' + pet + ' to ' + adventure);
                                        post('https://blockchaincuties.com/rest/1/adventure_start', {
                                            petId: resCutie.id,
                                            adventureConfigId: adventure
                                        }, function (xhttp) {
                                            count++;
                                            localStorage.setItem('savedClicks' + playerId, parseInt(localStorage.getItem('savedClicks' + playerId) || 0) + 3);
                                            $('.at_stats b').text(parseInt(localStorage.getItem('savedClicks' + playerId) || 0));
                                            $('#at_msg').text(count + ' of ' + totalCount + ' cuties sent succesfully.');
                                        }, function (xhttp) {
                                            console.log(xhttp);
                                            $('#at_msg').text('Error.. :( Couldn\'t send ' + pet + ' to ' + adventure);
                                        }, accessToken);
                                    }, 500);
                            } else {
                                $('#at_msg').text('sending #' + pet + ' to ' + adventure);
                                post('https://blockchaincuties.com/rest/1/adventure_start', {
                                    petId: resCutie.id,
                                    adventureConfigId: adventure
                                }, function (xhttp) {
                                    count++;
                                    localStorage.setItem('savedClicks' + playerId, parseInt(localStorage.getItem('savedClicks' + playerId) || 0) + 3);
                                    $('.at_stats b').text(parseInt(localStorage.getItem('savedClicks' + playerId) || 0));
                                    $('#at_msg').text(count + ' of ' + totalCount + ' cuties sent succesfully.');
                                }, function (xhttp) {
                                    console.log(xhttp);
                                    $('#at_msg').text('Error.. :( Couldn\'t send ' + pet + ' to ' + adventure);
                                }, accessToken);
                            }

                        } else {
                            $('#at_msg').text('#' + pet + ' is not ready for ' + adventure);
                        }
                    });
            }
        });

    } else {
        $('#at_msg').text('There are no eligible cuties to send.');
    }
    $('#at_send').removeAttr("disabled");
    localStorage.setItem('adventurers', JSON.stringify({}));
}


function batchEquip(accessToken, playerId, item, subject, method, number) {

    // var itemsToUse = JSON.parse(localStorage.getItem('itemsToUse'));

    if (subject == 'group') {
        switch (item) {
            case 'ElixirEnergy':
                servingList = JSON.parse(localStorage.getItem('energyDrList'));
                break;
            case 'ElixirAdventure':
                servingList = JSON.parse(localStorage.getItem('advPotList'));
                break;
            case 'ElixirAdventureGrand':
                servingList = JSON.parse(localStorage.getItem('advPotGrList'));
                break;
            default:
                servingList = {};
        }

        if (servingList.length === 0) {
            $('#at_msg_pot').text('There are no eligible cuties to give potion to.');
        }
        // equipCuties(servingList, item, accessToken);
        // console.log(servingList);
        // return;
        var updatedServingList = [];


        $.each(servingList, function (key, petId) {
            var last = servingList.length === key + 1;
            petCheck(petId, accessToken,
                function (cutie) {
                    premiumWallets = localStorage.getItem('premiumWallets') || {};
                    userEthWallet = cutie.owner.blockchains.ETHEREUM ? cutie.owner.blockchains.ETHEREUM.toLowerCase() : false;
                    userTrxWallet = cutie.owner.blockchains.TRON ? cutie.owner.blockchains.TRON.toLowerCase() : false;
                    if (premiumWallets.toLowerCase().indexOf(userEthWallet) != -1 || premiumWallets.toLowerCase().indexOf(userTrxWallet) != -1) {
                        if (localStorage.getItem('blackList').indexOf(cutie.uid) === -1 && ((item == 'ElixirAdventure' && cutie.adventureCooldown >= 1) || (item == 'ElixirAdventureGrand' && cutie.adventureCooldown >= 2) || item == 'ElixirEnergy') && cutie.adventure == undefined && cutie.owner.id == playerId) {


                            var cutieId = cutie.id;
                            if (item == 'ElixirEnergy') {

                                updatedServingList.push(cutie.id);
                                if (last) {
                                    equipCuties(updatedServingList, item, accessToken);
                                    return;
                                }
                            } else if (method === 'limit') {

                                updatedServingList.push(cutie.id);
                                if (last) {
                                    for (var i = 0; i < number; i++) {
                                        equipCuties(updatedServingList, item, accessToken);
                                    }
                                    return;
                                }
                            } else if ($.isNumeric(method) && cutie.adventureCooldown > method) {

                                for (var i = 0; i < (cutie.adventureCooldown - method); i++) {
                                    equipCuties([cutie.id], item, accessToken);
                                }
                                return;
                            } else if (method == 'preferred') {
                                var currentCDs = localStorage.getItem('preferredACD');
                                if (currentCDs) {
                                    var currentCDs = JSON.parse(currentCDs);
                                } else {
                                    var currentCDs = {};
                                }

                                if (currentCDs.length == 0) {
                                    $('#at_msg_pot').text('There are no eligible cuties to give potion to.');
                                }

                                $('#at_msg_pot').text('Giving potions to cuties..');
                                if (currentCDs[petId] && (cutie.adventureCooldown > cd && localStorage.getItem('blackList').indexOf(cutie.uid) === -1 && ((item === 'ElixirAdventure' && cutie.adventureCooldown >= 1) || (item === 'ElixirAdventureGrand' && cutie.adventureCooldown >= 2)) && cutie.adventure == undefined && cutie.owner.id == playerId)) {
                                    updatedServingList.push(cutie.id);
                                }
                                if (last) {
                                    equipCuties(updatedServingList, item, accessToken);
                                }
                            }
                        }
                    } else {
                        $('#at_msg_pot').text("");
                        $('#at_msg_pot').append("Auto Tools is a premium feature, but unfortunately you haven't activated it!<br/>Visit the <a href='https://dcm.verychard.com/premium/' target='_blank'> <strong>Premium Sender Info Page</strong> </a> for more information");
                        $('#at_drink').removeAttr("disabled");
                        return;
                    }
                }
            )
            ;
        })
        ;

    } else if (subject == 'all') {

        var updatedServingList = [];

        if (method == 'preferred') {
            var currentCDs = localStorage.getItem('preferredACD');
            if (currentCDs) {
                var currentCDs = JSON.parse(currentCDs);
            } else {
                var currentCDs = {};
            }

            if (localStorage.getItem('preferredACD').length == 0) {
                $('#at_msg_pot').text('There are no eligible cuties to give potion to.');
            }

            $('#at_msg_pot').text('Giving potions to cuties..');

            $.each(currentCDs, function (petId, cd) {

                petCheck(petId, accessToken,
                    function (cutie) {
                        premiumWallets = localStorage.getItem('premiumWallets') || {};
                        userEthWallet = cutie.owner.blockchains.ETHEREUM ? cutie.owner.blockchains.ETHEREUM.toLowerCase() : false;
                        userTrxWallet = cutie.owner.blockchains.TRON ? cutie.owner.blockchains.TRON.toLowerCase() : false;
                        if (premiumWallets.toLowerCase().indexOf(userEthWallet) != -1 || premiumWallets.toLowerCase().indexOf(userTrxWallet) != -1) {
                            if (cutie.adventureCooldown > cd && localStorage.getItem('blackList').indexOf(cutie.uid) === -1 && ((item == 'ElixirAdventure' && cutie.adventureCooldown >= 1) || (item == 'ElixirAdventureGrand' && cutie.adventureCooldown >= 2)) && cutie.adventure == undefined && cutie.owner.id == playerId) {

                                for (var i = 0; i < (cutie.adventureCooldown - cd); i++) {
                                    equipCuties([cutie.id], item, accessToken);
                                }

                            } else {
                                $('#at_msg_pot').text('Error.. :( Couldn\'t give potion to #' + cutie.uid);
                            }
                        } else {
                            $('#at_msg_pot').text("");
                            $('#at_msg_pot').append("Auto Tools is a premium feature, but unfortunately you haven't activated it!<br/>Visit the <a href='https://dcm.verychard.com/premium/' target='_blank'> <strong>Premium Sender Info Page</strong> </a> for more information");
                            $('#at_drink').removeAttr("disabled");
                            return;
                        }
                    });


            });
        } /*else if (method == 'limit') {
            collectPetsRecursive(accessToken, playerId, 0, item, method, number);
        } else if ($.isNumeric(method)) {
            collectPetsRecursive(accessToken, playerId, 0, item, method);
        }*/
    } else if (subject == 'drunks') {
        var drunks = localStorage.getItem('drunks');
        if (drunks) {
            var drunks = JSON.parse(drunks);
        } else {
            var drunks = {};
        }
        if (drunks.length == 0) {
            $('#at_msg_pot').text('There are no eligible cuties to give potion to.');
        }
        $('#at_msg_pot').text('Giving potions to cuties..');
        $.each(drunks, function (key, petId) {
            petCheck(petId, accessToken,
                function (cutie) {
                    premiumWallets = localStorage.getItem('premiumWallets') || {};
                    userEthWallet = cutie.owner.blockchains.ETHEREUM ? cutie.owner.blockchains.ETHEREUM.toLowerCase() : false;
                    userTrxWallet = cutie.owner.blockchains.TRON ? cutie.owner.blockchains.TRON.toLowerCase() : false;
                    if (premiumWallets.toLowerCase().indexOf(userEthWallet) != -1 || premiumWallets.toLowerCase().indexOf(userTrxWallet) != -1) {
                        if (localStorage.getItem('blackList').indexOf(cutie.uid) === -1 && ((item == 'ElixirAdventure' && cutie.adventureCooldown >= 1) || (item == 'ElixirAdventureGrand' && cutie.adventureCooldown >= 2)) && cutie.adventure == undefined && cutie.owner.id == playerId) {
                            if (method == 'limit') {
                                for (var i = 0; i < number; i++) {

                                    var cutieId = cutie.id;
                                    var itemId = itemsToUse[0];
                                    itemsToUse.shift();
                                    localStorage.setItem('itemsToUse', JSON.stringify(itemsToUse));

                                    post('https://blockchaincuties.com/rest/1/item_use', {
                                        itemId: itemId,
                                        petId: cutieId
                                    }, function (xhttp) {
                                        $('#at_msg_pot').text('Giving ' + item + ' to #' + petId);
                                        localStorage.setItem('savedClicks' + playerId, parseInt(localStorage.getItem('savedClicks' + playerId) || 0) + 5);
                                        $('.at_stats b').text(parseInt(localStorage.getItem('savedClicks' + playerId) || 0));

                                    }, function (xhttp) {
                                        console.log('Error: ' + xhttp.error);
                                        $('#at_msg_pot').text('Error.. :( Couldn\'t chug potions');
                                    }, accessToken);
                                }
                            } else if ($.isNumeric(method) && cutie.adventureCooldown >= method) {

                                var cutieId = cutie.id;
                                var itemId = itemsToUse[0];
                                itemsToUse.shift();
                                localStorage.setItem('itemsToUse', JSON.stringify(itemsToUse));
                                post('https://blockchaincuties.com/rest/1/item_use', {
                                    itemId: itemId,
                                    petId: cutieId
                                }, function (xhttp) {
                                    $('#at_msg_pot').text('Giving ' + item + ' to #' + petId);
                                    localStorage.setItem('savedClicks' + playerId, parseInt(localStorage.getItem('savedClicks' + playerId) || 0) + 5);
                                    $('.at_stats b').text(parseInt(localStorage.getItem('savedClicks' + playerId) || 0));


                                    if (xhttp.response.pet.adventureCooldown >= method) {
                                        batchEquip(accessToken, playerId, item, cutieId, method);
                                    }

                                }, function (xhttp) {
                                    console.log('Error: ' + xhttp.error);
                                    $('#at_msg_pot').text('Error.. :( Couldn\'t chug potions');
                                }, accessToken);
                            } else {
                                $('#at_msg_pot').text("");
                                $('#at_msg_pot').append("Auto Tools is a premium feature, but unfortunately you haven't activated it!<br/>Visit the <a href='https://dcm.verychard.com/premium/' target='_blank'> <strong>Premium Sender Info Page</strong> </a> for more information");
                                $('#at_drink').removeAttr("disabled");
                            }
                        }
                    } else {
                        $('#at_msg_pot').text("");
                        $('#at_msg_pot').append("Auto Tools is a premium feature, but unfortunately you haven't activated it!<br/>Visit the <a href='https://dcm.verychard.com/premium/' target='_blank'> <strong>Premium Sender Info Page</strong> </a> for more information");
                        $('#at_drink').removeAttr("disabled");
                        return;
                    }
                });
        });
    } else if ($.isNumeric(subject)) {
        var itemId = itemsToUse[0];
        itemsToUse.shift();
        localStorage.setItem('itemsToUse', JSON.stringify(itemsToUse));
        post('https://blockchaincuties.com/rest/1/item_use', {
            itemId: itemId,
            petId: subject
        }, function (xhttp) {
            $('#at_msg_pot').text('Giving ' + item + ' to #' + subject);
            localStorage.setItem('savedClicks' + playerId, parseInt(localStorage.getItem('savedClicks' + playerId) || 0) + 5);
            $('.at_stats b').text(parseInt(localStorage.getItem('savedClicks' + playerId) || 0));


            if ($.isNumeric(method) && xhttp.response.pet.adventureCooldown > method && ((item == 'ElixirAdventure' && xhttp.response.pet.adventureCooldown >= 1) || (item == 'ElixirAdventureGrand' && xhttp.response.pet.adventureCooldown >= 2))) {
                batchEquip(accessToken, playerId, item, subject, method);
            } else if (method == 'preferred') {
                var currentCDs = localStorage.getItem('preferredACD');
                if (currentCDs) {
                    var currentCDs = JSON.parse(currentCDs);
                } else {
                    var currentCDs = {};
                }

                batchEquip(accessToken, playerId, item, subject, currentCDs[subject]);
            }
        }, function (xhttp) {
            console.log('Error: ' + xhttp.error);
            $('#at_msg_pot').text('Error.. :( Couldn\'t chug potion');
        }, accessToken);
    }


}

function prepareItems(accessToken, playerId, item, subject, method, number, callback) {
    $('#at_msg_pot').text('Preparing items..');
    /* post('https://blockchaincuties.com/rest/1/itemsByKind', {
         itemKind: item
     }, function (xhttp) {
         var itemsToUse = [];
         $.each(xhttp.response.items, function (key, data) {
             itemsToUse.push(data.itemId);
             localStorage.setItem('itemsToUse', JSON.stringify(itemsToUse));
         });*/

    $('#at_msg_pot').text('Items ready!');

    batchEquip(accessToken, playerId, item, subject, method, number);


    /*  }, function (xhttp) {
          console.log('Error: ' + xhttp.response.error);
          $('#at_msg_pot').text('Error.. :( Couldn\'t prepare potions');
      }, accessToken);*/

}

function collectPetsRecursive(accessToken, playerId, pageNumber, item, method, number) {
    currentPage = pageNumber || 0;

    post('https://blockchaincuties.com/rest/1/pets', {
        ownerId: playerId,
        page: currentPage,
        size: 50,
        sortBy: "Adventure",
        sortOrder: "Desc",
        availableForTokens: false,
        ignoreGroups: true,
        listBattleState: true
    }, function (xhttp) {
        premiumWallets = localStorage.getItem('premiumWallets') || {};
        userEthWallet = xhttp.response.owner.blockchains.ETHEREUM ? xhttp.response.owner.blockchains.ETHEREUM.toLowerCase() : false;
        userTrxWallet = xhttp.response.owner.blockchains.TRON ? xhttp.response.owner.blockchains.TRON.toLowerCase() : false;
        if (premiumWallets.toLowerCase().indexOf(userEthWallet) != -1 || premiumWallets.toLowerCase().indexOf(userTrxWallet) != -1) {

            $('#at_msg_pot').text("Getting volunteer cuties.. " + Math.ceil(currentPage / Math.floor(xhttp.response.petCount / 50) * 100) + "%");
            currentPage++;
            drunks = localStorage.getItem('drunks');
            if (drunks) {
                drunks = JSON.parse(drunks);
            } else {
                drunks = [];
            }

            $.each(xhttp.response.pets, function (key, data) {
                if (data.timeNextAdventure <= Date.now() / 1000 && localStorage.getItem('blackList').indexOf(data.uid) === -1) {
                    drunks.push(data.uid);
                }
            });

            localStorage.setItem('drunks', JSON.stringify(drunks));


            if (Math.floor(xhttp.response.petCount / 50) >= currentPage) {
                collectPetsRecursive(accessToken, playerId, currentPage, item, method, number);
            } else {
                prepareItems(accessToken, playerId, item, 'drunks', method, number);
            }
        } else {
            $('#at_msg_pot').text("");
            $('#at_msg_pot').append("Auto Tools is a premium feature, but unfortunately you haven't activated it!<br/>Visit the <a href='https://dcm.verychard.com/premium/' target='_blank'> <strong>Premium Sender Info Page</strong> </a> for more information")
            $('#at_drink').removeAttr("disabled");
        }
    }, function (xhttp) {
        console.log(xhttp.response);
        $('#at_send').removeAttr("disabled");
    }, accessToken);
}

function getPets(accessToken, playerId, adventure, pageNumber, noNewborns, noNaked, prePotion) {
    $('#at_send').attr("disabled", "disabled");
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
    var minLvl = 1;
    if (adventure != 'strongest' && adventure != 'highest' && adventure != 'preferred') {
        minLvl = adventures.indexOf(adventure);
    }
    post('https://blockchaincuties.com/rest/1/pets', {
        availableForTokens: false,
        ignoreGroups: true,
        minLevel: minLvl,
        minExp: noNewborns ? 1 : 0,
        listBattleState: true,
        listItems: noNaked,
        readyForAdventure: true,
        ownerId: playerId,
        page: pageNumber || 0,
        size: 50,
        sortBy: 'Adventure',
        sortOrder: 'Desc'
    }, function (xhttp) {
        premiumWallets = localStorage.getItem('premiumWallets') || {};
        userEthWallet = xhttp.response.owner.blockchains.ETHEREUM ? xhttp.response.owner.blockchains.ETHEREUM.toLowerCase() : false;
        userTrxWallet = xhttp.response.owner.blockchains.TRON ? xhttp.response.owner.blockchains.TRON.toLowerCase() : false;
        if (premiumWallets.toLowerCase().indexOf(userEthWallet) != -1 || premiumWallets.toLowerCase().indexOf(userTrxWallet) != -1) {
            var readyPets = {};
            var count = 0;
            $.each(xhttp.response.pets, function (key, pet) {
                if (xhttp.response.disabled == undefined || (xhttp.response.disabled != undefined && xhttp.response.disabled[pet.id] == undefined)) {
                    readyPets[pet.id] = pet;
                    count++;
                }
            });
            var totalPages = Math.ceil(xhttp.response.petCountTotal / 50);
            if (xhttp.response.disabled !== undefined && Object.keys(xhttp.response.pets).length == Object.keys(xhttp.response.disabled).length) {
                var totalPages = pageNumber;
            }
            filterPets(readyPets, accessToken, adventure, totalPages, pageNumber || 0, playerId, noNewborns, noNaked, prePotion);
        } else {
            $('#at_msg').text("");
            $('#at_msg').append("Auto Sender is a premium feature, but unfortunately you haven't activated it!<br/>Visit the <a href='https://dcm.verychard.com/premium/' target='_blank'> <strong>Premium Sender Info Page</strong> </a> for more information<div class='at_tooltip'><i class='far fa-question-circle'></i><div class='tooltiptext'><div class='tooltipInner'><h3>How to activate Auto Sender</h3>Send the required amount of ETH or TRX to the matching address.<br/>Write me a message when the transaction is completed on telegram,mail or discord to speed up the validation process.<br/><br/>Price of the service is based on the amount of cuties you own, to make sure it's fair for the players with fewer cuties who have less adventures to benefit from. Get it as soon as possible, before breeding more of them!<br/><br/><div class='service_fees'>For <span class='cutieCount'>0</span> cuties you shall send<br/><span class='service_price_eth'>1 ETH</span><br/>or<br/><span class='service_price_trx'>4400 TRX</span><br/>to the ETH or TRX address shown in the DCM menu (top-right corner, dragon head)</div></div></div></div>")
            $('.cutieCount').text(xhttp.response.petCountTotal);
            $('.service_price_eth').text(xhttp.response.petCountTotal * 0.001 + ' ETH');
            $('.service_price_trx').text(Math.ceil(xhttp.response.petCountTotal * 4.4) + ' TRX');
            $('#at_send').removeAttr("disabled");
        }


    }, function (xhttp) {
        console.log(xhttp.response);
        $('#at_send').removeAttr("disabled");
    }, accessToken);


}

function showEggWhileBreed(svgPath) {
    if (window.location.pathname.indexOf('/pet/') === 0) {
        var egg = '<img class="cutie_child_egg shk" src="' + svgPath + '">'
        $('.pet_banner_container').append(egg);
    }
}

function cutieNextLevel() {
    if (window.location.pathname.startsWith('/pet/')) {
        var thisCutieId = window.location.pathname.replace('/pet/', '');

        var adventurePairs = {
            'WindyHills': 75,
            'SnowyMountain': 110,
            'MagicalForest': 150,
            'TheDesert': 185,
            'IvoryTower': 225,
            'Metropolis': 350,
            'Ghetto': 450,
            'GatesOfBabylon': 450,
            'BloodMoonForest': 450,
            'Wasteland': 450,
            'Tavern': 0,
        };

        var lvlvReq = {
            1: 0,
            2: 1000,
            3: 3000,
            4: 7000,
            5: 15000,
            6: 31000,
            7: 63000,
            8: 127000,
            9: 255000,
            10: 511000,
        };

        var xpReward = {
            1: 110,
            2: 150,
            3: 185,
            4: 225,
            5: 350,
            6: 450,
            7: 450,
            8: 450,
            9: 450,
            10: 0,
        }


        var petLvl = parseInt($('.exp_level').text().replace(/[^0-9]/gi, ''));
        if (petLvl < 10) {
            var xpBonus = parseInt($('.stat_expBonus').closest('.stat_block_number').text().replace(/[^0-9]/gi, ''));


            post('https://blockchaincuties.com/rest/1/pet', {
                uid: thisCutieId
            }, function (xhttp) {
                var neededXp = xhttp.response.pet_model.expNext - xhttp.response.pet_model.expPoints;
                var neededAdventures = 0;
                var estimatedGainXp = 0;
                var preferred = false;

                var preferredAdvs = localStorage.getItem('preferredAdv');
                if (preferredAdvs) {
                    preferredAdvs = JSON.parse(preferredAdvs);
                } else {
                    var preferredAdvs = {};
                }
                if (preferredAdvs[thisCutieId] !== undefined) {
                    preferred = true;
                    estimatedGainXp = adventurePairs[preferredAdvs[thisCutieId]] * ((xpBonus / 100) + 1);
                } else {
                    if (petLvl >= 6) {
                        estimatedGainXp = 450 * ((xpBonus / 100) + 1);
                    } else {
                        estimatedGainXp = xpReward[petLvl] * ((xpBonus / 100) + 1);
                    }
                }

                neededAdventures = Math.ceil(neededXp / estimatedGainXp);

                var dom = $('<div class="at_tooltip"><i class="fas fa-angle-double-up" ></i>' + neededAdventures + '<div class="tooltiptext"> ~' + neededAdventures + 'more adventures to level up.Estimate is expecting that you keep current gear, and always send your cutie to ' + (preferred ? preferredAdvs[thisCutieId] : 'the highest adventure') + ', and you win 50 % of battles.</div></div>');
                $('.exp_block').prepend(dom);


                if (xhttp.response.pet_model.family.children.length > 0) {
                    $.each(xhttp.response.pet_model.family.children, function (key, child) {
                        if (child.timeBorn > (Date.now() / 1000)) {
                            showEggWhileBreed(child.imageSvg);
                            return false;
                        }
                    });
                } else if (xhttp.response.pet_model.timeBorn > (Date.now() / 1000)) {
                    $('.pet_banner_container img').addClass('shk');
                }
            }, function (xhttp) {
                console.log(xhttp.response);
            }, accessToken);
        }
    }
}

function petCheck(petId, accessToken, callback) {
    post('https://blockchaincuties.com/rest/1/pet', {
        uid: petId
    }, function (xhttp) {
        callback(xhttp.response.pet_model);
    }, function (xhttp) {
        console.log(xhttp);
    }, accessToken);

}

function activities(accessToken, callback) {
    post('https://blockchaincuties.com/rest/1/activities', {page: 0, size: 1}, function (xhttp) {
        callback(xhttp.response);
    }, function (xhttp) {
        console.log(xhttp);
    }, accessToken);

}

function ping(accessToken, callback) {
    post('https://blockchaincuties.com/rest/1/ping', {}, function (xhttp) {
        callback(xhttp.response);
    }, function (xhttp) {
        console.log(xhttp);
    }, accessToken);

}

function addToGroup(pets, accessToken) {
    post('https://blockchaincuties.com/rest/1/selection_add_group', {
        groupId: 41439043,
        petIds: pets
    }, function (xhttp) {

    }, function (xhttp) {
        console.log(xhttp);
    }, accessToken);

}

function equipCuties(cuties, item, accessToken) {
    post('https://blockchaincuties.com/rest/1/selection_item_use', {
        petIds: cuties,
        itemKind: item,
        groupId: null
    }, function (xhttp) {
        callback(xhttp.response);
    }, function (xhttp) {
        (xhttp);
    }, accessToken);

}

function elementPower() {

    var bigGuys = [];
    $('.pet_grid-item:not(.group-folder-grid-item)').each(function () {
        var bonuses = {};
        var cutieId = $(this).find('.VeRychard').data('id');
        var cutieLvl = $(this).find('.VeRychard').data('explevel');
        $(this).find('.VeRychard span').each(function () {
            bonuses[$(this).data('kind')] = $(this).data('value');
        });
        var mmp = Math.floor((bonuses.power || 0) * 1.6 + (bonuses.attack || 0) + (bonuses.defence || 0) + (bonuses.evasion || 0) * 25 + (bonuses.criticalHit || 0) * 25);
        var lvlReqs = [
            1000,
            3000,
            7000,
            15000,
            31000,
            63000,
            127000,
            255000,
            511000,
        ];
        var xpReward = {
            1: 110,
            2: 150,
            3: 185,
            4: 225,
            5: 350,
            6: 450,
            7: 450,
            8: 450,
            9: 450,
        };

        var expVal = Math.round((bonuses.exp || 0) * 100);

        var power = '<div class="stat_block_number" ><div class="stat_block_icon stat_power"></div>' + (bonuses.power || 0) + '<div class="clear"></div></div>';
        var attack = '<div class="stat_block_number" ><div class="stat_block_icon stat_attackBonus"></div>' + (bonuses.attack || 0) + '<div class="clear"></div></div>';
        var defense = '<div class="stat_block_number" ><div class="stat_block_icon stat_defenceBonus"></div>' + (bonuses.defence || 0) + '<div class="clear"></div></div>';
        var evasion = '<div class="stat_block_number" ><div class="stat_block_icon stat_evasion"></div>' + Math.round((bonuses.evasion || 0) * 100) + '%<div class="clear"></div></div>';
        var luck = '<div class="stat_block_number" ><div class="stat_block_icon stat_critical"></div>' + Math.round((bonuses.criticalHit || 0) * 100) + '%<div class="clear"></div></div>';
        var drop = '<div class="stat_block_number" ><div class="stat_block_icon stat_luck"></div>' + Math.round((bonuses.rewardDropChance || 0) * 100) + '%<div class="clear"></div></div>';
        var exp = '<div class="stat_block_number" ><div class="stat_block_icon stat_expBonus "></div>' + expVal + '%<div class="clear"></div></div>';
        var raid = '<div class="stat_block_number" ><div class="stat_block_icon stat_custom"></div>' + (bonuses.raid || 0) + '<div class="clear"></div></div>';
        var air = '<div class="stat_block_number" ><div class="stat_block_icon stat_air"></div>' + (bonuses.air || 0) + '<div class="clear"></div></div>';
        var water = '<div class="stat_block_number" ><div class="stat_block_icon stat_water"></div>' + (bonuses.water || 0) + '<div class="clear"></div></div>';
        var earth = '<div class="stat_block_number" ><div class="stat_block_icon stat_earth"></div>' + (bonuses.earth || 0) + '<div class="clear"></div></div>';
        var fire = '<div class="stat_block_number" ><div class="stat_block_icon stat_fire"></div>' + (bonuses.fire || 0) + '<div class="clear"></div></div>';
        var energy = '<div class="stat_block_number" ><div class="stat_block_icon stat_energy"></div>' + (bonuses.energy || 0) + '<div class="clear"></div></div>';
        var experiencePoints = $(this).find('.VeRychard').data('exppoints');


        var experiencePercent = cutieLvl < 10 ? Math.floor(((experiencePoints - lvlReqs[cutieLvl - 2]) / (lvlReqs[cutieLvl - 1] - lvlReqs[cutieLvl - 2])) * 100) : 100;


        var estimatedGainXp = 0;
        var neededAdventures = 0;
        var adventurePairs = {
            'WindyHills': 75,
            'SnowyMountain': 110,
            'MagicalForest': 150,
            'TheDesert': 185,
            'IvoryTower': 225,
            'Metropolis': 350,
            'Ghetto': 450,
            'GatesOfBabylon': 450,
            'BloodMoonForest': 450,
            'Wasteland': 450,
            'Tavern': 0,
        };
        var cutieUid = $(this).find('.quick-slot-wrap').attr('href').replace('/pet/', '');
        var neededXp = lvlReqs[cutieLvl - 1] - experiencePoints;

        var preferredAdvs = localStorage.getItem('preferredAdv');
        if (preferredAdvs) {
            preferredAdvs = JSON.parse(preferredAdvs);
        } else {
            var preferredAdvs = {};
        }

        if (preferredAdvs[cutieUid] !== undefined) {
            estimatedGainXp = adventurePairs[preferredAdvs[cutieUid]] * ((expVal / 100) + 1);
        } else if (cutieLvl < 10) {
            if (cutieLvl >= 6) {
                estimatedGainXp = 450 * ((expVal / 100) + 1);
            } else {
                estimatedGainXp = xpReward[cutieLvl] * ((expVal / 100) + 1);
            }
        }

        neededAdventures = Math.ceil(neededXp / estimatedGainXp);

        var experienceBar = '<div class="stat_block_number experience_bar" ><span>Experience: ' + ((cutieLvl < 10) ? (experiencePercent + '% - <small>' + neededAdventures + ' adventure' + (neededAdventures > 1 ? 's' : '') + ' to go</small>') : ('Max level')) + '</span><div class="exp_fill" style="height:100%;width:' + experiencePercent + '%"></div></div>';

        var mmpTooltip = '<div class="at_tooltip tooltip_mmp_details"><div class="tooltiptext" style="width: 300px"><div class="mmp_details">' + power + attack + defense + evasion + luck + drop + exp + raid + air + water + earth + fire + energy + experienceBar + '</div></div></div>';

        var mmpBlock = '<span class="pet_card_details_item" title="base Matchmaking Power (without elements) : power*1.6 + attack + defense + evasion/4 + luck/4">MMP ' + mmp + '</span>';
        var elements = [bonuses.air || 0, bonuses.water || 0, bonuses.fire || 0, bonuses.earth || 0, bonuses.energy || 0];
        var biggest = elements.reduce(function (a, b) {
            return a > b ? a : b;
        });
        if (biggest > 5) {
            bigGuys.push(cutieId);
            $(this).find('.stat_element').addClass('strong');
        }
        $(this).find('.stat_element').attr('data-content', biggest);
        $(this).find('.pet_additonal_details').append(mmpBlock);


        if (window.location.pathname.startsWith('/pets_adventure') || window.location.pathname.startsWith('/pets_my') || window.location.pathname.startsWith('/raidboss')) {
            $(this).find('.stat_element').append(mmpTooltip);
        }
    });
    //console.log(bigGuys);
    // addToGroup(bigGuys, accessToken);
}

// function getRaidId(accessToken) {
//     if ($('.at_tooltip.tooltip_raid_info').length == 0) {
//         petTypes = {
//             "Bear": "Ursa",
//             "Hedgehog": "Hedge",
//             "Dog": "Canis",
//             "Cat": "Felis",
//             "Fox": "Canidae",
//             "Pig": "Sus",
//             "Lizard": "Reptile"
//         }
//
//         post('https://blockchaincuties.com/rest/1/raid_current', {
//             size: 16,
//             raidGroup: 'fall',
//             sortBy: 'ExpLevel',
//             sortOrder: 'Desc'
//         }, function (xhttp) {
//
//
//             var remainingRaidTries = (xhttp.response.currentEnergyFree + xhttp.response.currentEnergyPaid) / 20;
//             var blockedRaiders = xhttp.response.disabledIds;
//
//
//             var raidInfo = '<div class="at_tooltip tooltip_raid_info"><i class="far fa-question-circle"></i><div class="tooltiptext" style="width: 300px"><div class="raid-info"><div style="text-align:center">RAID BOSS INFO</div><div class="raid-left">Remaining tries: <span>' + remainingRaidTries + '</span></div><ul class="raid-boss-atributes"><li class="raid-boss-atributes-item pr"><div class="raid-boss-atributes-title">Strong against</div><div class="raid-boss-atributes-img"><img  id="raid_strong_race" src="/static/raid/' + petTypes[xhttp.response.raid.config.petKindStrength[0]] + '.png"></div><div class="raid-boss-atributes-img" ><img id="raid_strong_elem" src="/static/raid/' + xhttp.response.raid.config.elementStrength[0] + '.png"></div></li><li class="raid-boss-atributes-item pl"><div class="raid-boss-atributes-title">Weak against</div><div class="raid-boss-atributes-img"><img id="raid_weak_race" src="/static/raid/' + petTypes[xhttp.response.raid.config.petKindWeakness[0]] + '.png"></div><div class="raid-boss-atributes-img"><img id="raid_weak_elem" src="/static/raid/' + xhttp.response.raid.config.elementWeakness[0] + '.png"></div></li></ul></div></div></div>';
//
//             if ($('.tooltip_raid_info').length != 0) {
//                 $('.raid-left span').text(remainingRaidTries);
//
//                 $('#raid_weak_race').attr('src', '/static/raid/' + petTypes[xhttp.response.raid.config.petKindWeakness[0]] + '.png');
//                 $('#raid_weak_elem').attr('src', '/static/raid/' + xhttp.response.raid.config.elementWeakness[0] + '.png');
//                 $('#raid_strong_race').attr('src', '/static/raid/' + petTypes[xhttp.response.raid.config.petKindStrength[0]] + '.png');
//                 $('#raid_strong_elem').attr('src', '/static/raid/' + xhttp.response.raid.config.elementStrength[0] + '.png');
//             } else {
//                 $('.filter_tab.page_raid').append(raidInfo);
//             }
//
//             if (xhttp.response.currentEnergyFree > 0 || xhttp.response.currentEnergyPaid > 0) {
//                 $('.pet_grid-item').each(function () {
//                     var petId;
//                     if (($(this).find('.send-adventure-btn').data('pet_id'))) {
//                         petId = $(this).find('.send-adventure-btn').data('pet_id');
//
//                         if (jQuery.inArray(petId, blockedRaiders) == -1) {
//                             raidBtnId = xhttp.response.raid.id;
//                             raidBtnClass = '';
//                         } else {
//                             raidBtnId = false;
//                             raidBtnClass = 'disabled';
//                         }
//
//                         var raidBtn = '<span class="adv-raid-btn send-adventure-btn line_button_ ' + raidBtnClass + '" data-click="raid_start" data-raid_id="' + raidBtnId + '" data-pet_id="' + petId + '">Send to raid</span>';
//
//                         $(this).find('.pet_add_buttons').append(raidBtn);
//                     } else {
//                         var petGrid = $(this);
//                         petCheck(petGrid.find('.at_bl').data('cutie-id'), accessToken,
//                             function (d) {
//                                 petId = d.id;
//                                 if (jQuery.inArray(petId, blockedRaiders) == -1) {
//                                     raidBtnId = xhttp.response.raid.id;
//                                     raidBtnClass = '';
//                                 } else {
//                                     raidBtnId = false;
//                                     raidBtnClass = 'disabled';
//                                 }
//
//                                 var raidBtn = '<span class="adv-raid-btn send-adventure-btn line_button_ ' + raidBtnClass + '" data-click="raid_start" data-raid_id="' + raidBtnId + '" data-pet_id="' + petId + '">Send to raid</span>';
//
//                                 petGrid.find('.pet_add_buttons').append(raidBtn);
//                                 petGrid.find('.adv-raid-btn').on('click', function () {
//                                     sendToRaid($(this).data('pet_id'), $(this).data('raid_id'), accessToken);
//                                 });
//                             });
//
//                     }
//                 });
//
//                 $('.adv-raid-btn').on('click', function (e) {
//                     sendToRaid($(this).data('pet_id'), $(this).data('raid_id'), accessToken);
//                 });
//
//
//             }
//
//
//         }, function (xhttp) {
//             console.log(xhttp.response);
//         }, accessToken);
//
//     }
// }

// function sendToRaid(petId, raidId, accessToken) {
//     post('https://blockchaincuties.com/rest/1/raid_start_session', {
//         petId: petId,
//         raidId: raidId
//     }, function (xhttp) {
//         if (xhttp.response.result.result == 'Ok') {
//             $('.adv-raid-btn[data-pet_id="' + petId + '"]').addClass('disabled');
//             $('.raid-left span').text(parseInt($('.raid-left span').text()) - 1);
//             alert('Sent to raid succesfully!');
//         } else {
//             alert(xhttp.response.result.result);
//         }
//     }, function (xhttp) {
//         alert('Couldn\'t send to raid!');
//         console.log(xhttp.response.error);
//     }, accessToken);
// }

function filterPets(pets, accessToken, adventure, totalPages, pageNumber, playerId, noNewborns, noNaked, prePotion) {
    firstReadyPet = null;
    var willBeNext = true;
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

    adventurers = localStorage.getItem('adventurers');
    if (adventurers) {
        adventurers = JSON.parse(adventurers);
    } else {
        adventurers = {};
    }

    var preferredAdvs = localStorage.getItem('preferredAdv');
    if (preferredAdvs) {
        var preferredAdvs = JSON.parse(preferredAdvs);
    } else {
        var preferredAdvs = {};
    }

    $.each(pets, function (key, pet) {
        if (pet.timeNextAdventure > (Date.now() / 1000)) {
            if (localStorage.getItem('blackList').indexOf(pet.uid) === -1 && firstReadyPet == null) {
                firstReadyPet = pet;
            }
            willBeNext = false;
        }
        if (pet.timeNextAdventure <= (Date.now() / 1000) && (localStorage.getItem('blackList').indexOf(pet.uid) === -1) && ((adventure == 'preferred' && JSON.stringify(preferredAdvs).indexOf(pet.uid) !== -1) || adventure != 'preferred') && ((noNaked == true && pet.items !== undefined) || noNaked == false)) {
            var advStrengths = [
                0,
                pet.bonuses.water ? pet.bonuses.water.bonus : 0,
                pet.bonuses.energy ? pet.bonuses.energy.bonus : 0,
                pet.bonuses.fire ? pet.bonuses.fire.bonus : 0,
                pet.bonuses.air ? pet.bonuses.air.bonus : 0,
                pet.bonuses.earth ? pet.bonuses.earth.bonus : 0,
                (pet.bonuses.energy ? pet.bonuses.energy.bonus : 0) + (pet.bonuses.fire ? pet.bonuses.fire.bonus : 0),
                (pet.bonuses.earth ? pet.bonuses.earth.bonus : 0) + (pet.bonuses.air ? pet.bonuses.air.bonus : 0),
                (pet.bonuses.water ? pet.bonuses.water.bonus : 0) + (pet.bonuses.fire ? pet.bonuses.fire.bonus : 0),
                (pet.bonuses.energy ? pet.bonuses.energy.bonus : 0) + (pet.bonuses.fire ? pet.bonuses.fire.bonus : 0) + (pet.bonuses.earth ? pet.bonuses.earth.bonus : 0),
            ];

            var max = advStrengths[0];
            var maxIndex = 0;

            for (var i = 1; i <= pet.expLevel; i++) {
                if (advStrengths[i] >= max) {
                    maxIndex = i;
                    max = advStrengths[i];
                }
            }
            if (adventure == 'strongest') {
                var targetAdventure = adventures[maxIndex];
            } else if (adventure == 'highest') {
                var targetAdventure = adventures[pet.expLevel];
            } else if (adventure == 'preferred') {
                var targetAdventure = preferredAdvs[pet.uid];
            } else {
                var targetAdventure = adventure || "MagicalForest";
            }

            adventurers[pet.uid] = targetAdventure;
        }
    });
    if (Object.keys(adventurers).length == 0 && firstReadyPet != null) {
        var date = new Date(firstReadyPet.timeNextAdventure * 1000);
        var now = new Date();

        var res = Math.abs(date - now) / 1000;

        var hours = Math.floor(res / 3600) % 24;

        var minutes = Math.floor(res / 60) % 60;

        var seconds = Math.floor(res % 60);

        $('#at_msg').text('There were no eligible cuties to send.\r\nNext one available for adventure is in ' + hours + ' hours, ' + minutes + ' minutes, and ' + seconds + ' seconds');
        $('#at_send').removeAttr("disabled");
    } else {
        localStorage.setItem('adventurers', JSON.stringify(adventurers));
        if (pageNumber < totalPages && willBeNext) {
            var nextPage = pageNumber + 1;
            var percentDone = Math.ceil(nextPage / totalPages * 100)
            $('#at_msg').text('Collecting more pets.. (' + percentDone + '%)');
            getPets(accessToken, playerId, adventure, nextPage, noNewborns, noNaked, prePotion);
        } else {
            $('#at_msg').text('Collected all pets.');
            if (prePotion && prePotion != 0) {
                $('#at_msg').text('Preparing items..');
                /*post('https://blockchaincuties.com/rest/1/itemsByKind', {
                    itemKind: prePotion
                }, function (xhttp) {
                    var itemsToUse = [];
                    $.each(xhttp.response.items, function (key, data) {
                        itemsToUse.push(data.itemId);
                        localStorage.setItem('itemsToUse', JSON.stringify(itemsToUse));
                    });*/

                $('#at_msg').text('Items ready!');
                batchSend(prePotion);

                /* }, function (xhttp) {
                     console.log('Error: ' + xhttp.response.error);
                     $('#at_msg').text('Error.. :( Couldn\'t prepare potions');
                 }, accessToken);*/
            } else {
                batchSend();
            }

        }
    }

}

function clickATSend(adventure, noNewborns, noNaked, prePotion) {
    var playerId = localStorage.getItem('playerId');
    if (!playerId) {
        $('#at_msg').text('Getting player id, hold still..');
        getPlayerId(accessToken);
    } else {
        if (adventure == '') {
            $('#at_msg').text('Please select a method or an adventure.');
        }
        /* TODO After Kash Update use this for highest element, remove newborns/naked */
        /*else if(adventure == 'highest') {
            $('#at_msg').text('trying to send cuties to highest element adventure, please wait..');
            sendAllToHighest();
        }*/
        else {
            $('#at_msg').text('trying to send cuties to adventure, please wait..');
            getPets(accessToken, playerId, adventure, 0, noNewborns, noNaked, prePotion);
        }
    }
}

function sendAllToHighest() {
    post('https://blockchaincuties.com/rest/1/pet_mass_send_adventure', {
        adventureConfigId: null,
        adventureMode: 'MaxElement'
    }, function (xhttp) {

        $('#at_msg').text('Sent out all cuties where they are the strongest..');
        $('#at_send').removeAttr('disabled');

    }, function (xhttp) {
        console.log(xhttp.response);
        $('#at_send').removeAttr('disabled');
    }, accessToken);
}

function clickATPotion(item, subject, method, number) {
    var playerId = localStorage.getItem('playerId');
    if (!playerId) {
        $('#at_msg').text('Getting player id, hold still..');
        getPlayerId(accessToken);
    } else {
        $('#at_msg').text('please wait..');

        prepareItems(accessToken, playerId, item, subject, method, number);
    }
}


function getPlayerId(accessToken) {
    post('https://blockchaincuties.com/rest/1/pet', {
        uid: $('.pet_grid .pet_grid-item:first-of-type .quick-slot-wrap').attr('href').replace('/pet/', '')
    }, function (xhttp) {
        localStorage.setItem('playerId', xhttp.response.pet_model.owner.id);
        $('#at_reset_id').removeClass('fa-spin');
    }, function (xhttp) {
        console.log(xhttp.response.error);
    }, accessToken);
}


function getItems(accessToken, page) {
    var currPage = page ? page : 0;
    post('https://blockchaincuties.com/rest/1/inventory', {
        ownerId: localStorage.getItem('playerId'),
        page: currPage,
        playerId: localStorage.getItem('playerId'),
        groupKind: 'Elixir',
        itemKind: null,
        petId: null,
        rarityKind: null,
        showEquipped: false,
        showNonequipped: true,
        size: 32
    }, function (xhttp) {
        var maxPages = Math.floor(xhttp.response.itemCount / 50);

        var myItems = localStorage.getItem('myItems');
        if (myItems) {
            myItems = JSON.parse(myItems);
        } else {
            myItems = {};
        }
        $.each(xhttp.response.items, function (key, data) {
            if(data.statusTitle != 'item_status_arrested') {
                myItems[data.name] = data.count;
            }
        });

        if (currPage != maxPages) {
            localStorage.setItem('myItems', JSON.stringify(myItems));
            currPage += 1;
            getItems(accessToken, currPage);
        } else {
            $('.at_method_select').each(function () {
                if ($(this).data('click') == 'adventurePot') {
                    $(this).find('.itemCount').text(myItems.ElixirAdventure);
                } else if ($(this).data('click') == 'adventurePotGrand') {
                    $(this).find('.itemCount').text(myItems.ElixirAdventureGrand);
                } else if ($(this).data('click') == 'energyDrink') {
                    $(this).find('.itemCount').text(myItems.ElixirEnergy);
                }
            });
        }
    }, function (xhttp) {
        console.log(xhttp.response.error);
    }, accessToken);
}

function post(url, data, callback, error, token, after) {
    var xhttp = new XMLHttpRequest();
    xhttp.responseType = 'json';
    if (after) {
        xhttp.addEventListener('loadend', after);
    }
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            callback(xhttp);
        } else if (xhttp.readyState === 4) {
            error(xhttp);
        }
    };
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("x-auth-token", token);
    if (data === undefined) {
        xhttp.send();
    } else {
        xhttp.send(JSON.stringify(data));
    }
}

function arrayRemove(arr, value) {

    return arr.filter(function (ele) {
        return ele != value;
    });

}


function profileImageReplacer() {

    setTimeout(
        function () {
            var profileImages = [10574345, 11115532, 12457119, 2396796, 11480541, 6441789, 41522782, 22489231, 11625348, 13748801, 14911950, 11872, 11890, 16124844, 21123302, 16530262, 19146915];

            if (profileImages.indexOf($('.ProfileHeader-image').data('userid')) !== -1) {
                $('.ProfileHeader-info .ProfileHeader-image, .profile-popup-player .ProfileHeader-image').attr('src', 'https://dcm.verychard.com/resources/avatars/' + $('.ProfileHeader-image').data('userid') + '.jpg');
            }
            if (profileImages.indexOf($('.profile-avatar').data('userid')) !== -1) {
                $('.profile-avatar').attr('src', 'https://dcm.verychard.com/resources/avatars/' + $('.profile-avatar').data('userid') + '.jpg');
            }
        }, 200);
}

$(document).ready(function () {
    currencyChanger();
    //accessToken = window.Cookies.get('at');
	accessToken = 0;
    if ($('.at_xmas').length !== 0) {
        blacklistAndGroups();
    }
    cutieNextLevel();
    getSetBonuses();

    if ($('.etherGasPrices').length > 0) {
        currentDateTime = new Date();
        lastUpdated = ("0" + currentDateTime.getHours()).slice(-2) + ":" + ("0" + currentDateTime.getMinutes()).slice(-2) + ":" + ("0" + currentDateTime.getSeconds()).slice(-2);
        $('#slVal').text(configDynamic.gasPrices.Slow30min / 1000000000);
        $('#stVal').text(configDynamic.gasPrices.Medium5min / 1000000000);
        $('.gasUpdated').text(lastUpdated);
    }

    //TODO collect adventures here for later use with sender to be more dynamic with future updates from bc

    // if (window.location.pathname.startsWith('/pets_adventure')) {
    //     //alert('ready');
    //     getRaidId(accessToken);
    // }

    $('#at_reset_id').click(function () {
        $(this).addClass('fa-spin');
        getPlayerId(accessToken);
    });

    // $('#at_adventure_open').click(adventureToggler);
    //
    // $('#at_potion').click(potionToggler);

    $('#get-items').click(function () {
        getItems(accessToken);
    });
    $('#at_send').click(function () {
        var adventure = '';
        var noNewborns = false;
        var noNaked = false;
        var prePotion = $('#at_adv_prepotion').val();
        if ($('.at_method_select[data-click="highest"]').hasClass('selected')) {
            adventure = 'highest';
        } else if ($('.at_method_select[data-click="strongest"]').hasClass('selected')) {
            adventure = 'strongest';
        } else if ($('.at_method_select[data-click="preferred"]').hasClass('selected')) {
            adventure = 'preferred';
        } else {
            adventure = $('#at_adventure').children("option:selected").val();
        }
        if ($('.at_method_select.no_newborns').hasClass('selected')) {
            noNewborns = true;
        }
        if ($('.at_method_select.no_naked').hasClass('selected')) {
            noNaked = true;
        }

        clickATSend(adventure, noNewborns, noNaked, prePotion);
    });

    $('.reset_group').click(function () {
        localStorage.setItem($(this).data('list'), JSON.stringify([]));
        $('.group_count').text('0');
        $('#at_msg_pot').text('group reset');
    });

    $('#at_drink').click(function () {
        if ((!$('.at_method_select[data-click="selectAll"]').hasClass('selected') && !$('.at_method_select[data-click="groupOnly"]').hasClass('selected')) || (!$('.adventureBlock .at_method_select').hasClass('selected') && !$('#at_adv_cd').hasClass('selected') && !$('.at_method_select[data-click="energyDrink"]').hasClass('selected'))) {
            $('#at_msg_pot').text('Please make selection and choose potion usage.');
        } else {
            var subject = $('.at_method_select[data-click="selectAll"]').hasClass('selected') ? 'all' : 'group';
            if ($('.items-pots .at_method_select.selected').data('click') == 'adventurePot') {
                var item = 'ElixirAdventure';
            } else if ($('.items-pots .at_method_select.selected').data('click') == 'adventurePotGrand') {
                var item = 'ElixirAdventureGrand';
            } else if ($('.items-pots .at_method_select.selected').data('click') == 'energyDrink') {
                var item = 'ElixirEnergy';
            }

            if ($('#potion_number').val() > 0) {
                var method = "limit";
                var number = $('#potion_number').val()
            } else {
                if ($("#at_adv_cd option:selected").val() != "") {
                    var method = $("#at_adv_cd option:selected").val();
                } else {
                    var method = "preferred";
                }
            }
            clickATPotion(item, subject, method, number);
        }
    });
    $('#at_adventure').change(function () {
        $('#at_msg').text('');
        $(this).addClass('selected');
        $('.at_method_select[data-click="highest"], .at_method_select[data-click="strongest"], .at_method_select[data-click="preferred"]').removeClass('selected');
    });

    $('#at_adv_cd').change(function () {
        $(this).addClass('selected');
        $('.at_method_select[data-click="roundsToDrink"]').val('');
        $('.at_method_select[data-click="roundsToDrink"], .at_method_select[data-click="preferredCd"]').removeClass('selected');
    });
    $('.at_method_select').click(function () {
        $('#at_msg').text('');
        if ($(this).data('click') == 'strongest') {
            $('.at_method_select[data-click="highest"], .at_method_select[data-click="preferred"]').removeClass('selected');
            $('#at_adventure').prop('selectedIndex', 0);
            $('#at_adventure').removeClass('selected');
        } else if ($(this).data('click') == 'highest') {
            $('.at_method_select[data-click="strongest"], .at_method_select[data-click="preferred"]').removeClass('selected');
            $('#at_adventure').prop('selectedIndex', 0);
            $('#at_adventure').removeClass('selected');
        } else if ($(this).data('click') == 'preferred') {
            $('.at_method_select[data-click="strongest"], .at_method_select[data-click="highest"]').removeClass('selected');
            $('#at_adventure').prop('selectedIndex', 0);
            $('#at_adventure').removeClass('selected');
        } else if ($(this).data('click') == 'adventurePot') {
            $('.at_method_select[data-click="adventurePotGrand"], .at_method_select[data-click="energyDrink"]').removeClass('selected');
            $('.methods.commands').show();
            $('.adventureBlock, .at_method_select[data-click="selectAll"]').show();
            $('.group_name').text('Adventure Potion');
            $('.reset_group').data('list', 'advPotList');
            $('.group_count').text(JSON.parse(localStorage.getItem('advPotList')).length);
        } else if ($(this).data('click') == 'adventurePotGrand') {
            $('.at_method_select[data-click="adventurePot"], .at_method_select[data-click="energyDrink"]').removeClass('selected');
            $('.methods.commands').show();
            $('.adventureBlock, .at_method_select[data-click="selectAll"]').show();
            $('.group_name').text('Adventure Potion Grand');
            $('.reset_group').data('list', 'advPotGrList');
            $('.group_count').text(JSON.parse(localStorage.getItem('advPotGrList')).length);
        } else if ($(this).data('click') == 'energyDrink') {
            $('.at_method_select[data-click="adventurePotGrand"], .at_method_select[data-click="adventurePot"]').removeClass('selected');
            $('.methods.commands').show();
            $('.adventureBlock, .at_method_select[data-click="selectAll"]').hide();
            $('.group_name').text('Energy Drink');
            $('.reset_group').data('list', 'energyDrList');
            $('#potion_number').val('');
            $('#at_adv_cd').prop('selectedIndex', 0);
            $('.adventureBlock .at_method_select, #at_adv_cd, .at_method_select[data-click="selectAll"]').removeClass('selected');
            $('.group_count').text(JSON.parse(localStorage.getItem('energyDrList')).length);
        } else if ($(this).data('click') == 'preferredCd') {
            $('#at_adv_cd').prop('selectedIndex', 0);
            $('#potion_number').val('');
            $('#at_adv_cd, #potion_number').removeClass('selected');
        } else if ($(this).data('click') == 'roundsToDrink') {
            $('#at_adv_cd').prop('selectedIndex', 0);
            $('#at_adv_cd, .at_method_select[data-click="preferredCd"]').removeClass('selected');
        } else if ($(this).data('click') == 'groupOnly') {
            $('.at_method_select[data-click="selectAll"]').removeClass('selected');
            $('#potion_number, #at_adv_cd').show();
        } else if ($(this).data('click') == 'selectAll') {

            $('#potion_number').val('');
            $('#at_adv_cd').prop('selectedIndex', 0);
            $('.at_method_select[data-click="groupOnly"], #at_adv_cd, #potion_number').removeClass('selected');
            $('#potion_number, #at_adv_cd').hide();
        }
        $(this).toggleClass('selected');
    });


    // $(document).bind('keydown', function (e) {
    //     if (e.keyCode === 188) {
    //         if ($('#dcmExtras').is(":hidden")) {
    //             getSetBonuses();
    //         }
    //         $('#dcmExtras').toggle();
    //     }
    // });
    // $('.qm_extras a').on("click", function (e) {
    //     e.preventDefault();
    //     getSetBonuses();
    //     $('#dcmExtras').show();
    // });
    // $('.at_popup_close').on("click", function () {
    //     $('#dcmExtras').hide();
    // })


    $('.SetAuctionPage #number1, .SetAuctionPage #number2').on("change paste keyup", function () {
        currencyChanger();
    });
    elementPower(accessToken);

});

var oldXHR = window.XMLHttpRequest;

function newXHR() {
    var realXHR = new oldXHR();
    realXHR.addEventListener("readystatechange", function () {
        if (realXHR.readyState == 4 && !realXHR.responseURL.endsWith('/rest/1/ping') && !realXHR.responseURL.endsWith('/rest/1/auth_token') && !realXHR.responseURL.endsWith('/rest/1/adventure_start') && realXHR.responseURL.startsWith('https://blockchaincuties.com/rest')) {
            //console.log(realXHR);
            //accessToken = window.Cookies.get('at');
			accessToken = 0;

            profileImageReplacer();

            $('#at_adventure_open').click(adventureToggler);

            $('#at_potion').click(potionToggler);
        } else if (realXHR.readyState == 4 && realXHR.responseURL.endsWith('/rest/1/auth_token')) {
            var resp = JSON.parse(realXHR.response);
            var lastActivityId = resp.user.lastSeenActivityId;
            //console.log(resp.user);
        }
    }, false);
    return realXHR;
}

window.XMLHttpRequest = newXHR;

function potionToggler() {
    $('#at_popup_potion').toggle();
    $('#at_popup').hide();
    $('#at_adventure_open').removeClass('active');
    $(this).toggleClass('active');
}

function adventureToggler() {
    $('#at_popup').toggle();
    $('#at_popup_potion').hide();
    $('#at_potion').removeClass('active');
    $(this).toggleClass('active');
}

var config = {
    attributes: true
};
var targetNode = document.getElementsByClassName('loading_ani')[0];
var switcher = 0;

var callback = function (mutationsList, observer) {
    for (var mutation of mutationsList) {
        if (mutation.type == 'attributes' && $('.loading_ani').is(':visible')) {
            switcher = 1;
        } else if (mutation.type == 'attributes' && switcher == 1 && !$('.loading_ani').is(':visible')) {
            switcher = 2;

            //accessToken = window.Cookies.get('at');
			accessToken = 0;
			//todo, request the token from user
            if ($('.at_xmas').length !== 0) {
                blacklistAndGroups();
            }
            elementPower();
            currencyChanger();
            cutieNextLevel();
            // getSetBonuses();
            $('.SetAuctionPage #number1, .SetAuctionPage #number2').on("change paste keyup", function () {

                currencyChanger();
            });

            // if (window.location.pathname.startsWith('/pets_adventure')) {
            //     //alert('mutation');
            //     getRaidId(accessToken);
            // }

            $('#at_reset_id').click(function () {
                $(this).addClass('fa-spin');
                getPlayerId(accessToken);
            });
            $('#at_adventure_open').click(adventureToggler);

            $('#at_potion').click(potionToggler);


            $('#get-items').click(function () {
                getItems(accessToken);
            });
            if ($('#at_popup').length > 0) {
                $('#at_adventure').change(function () {
                    $('#at_msg').text('');
                    $(this).addClass('selected');
                    $('.at_method_select[data-click="highest"], .at_method_select[data-click="strongest"], .at_method_select[data-click="preferred"]').removeClass('selected');
                });

                $('#at_adv_cd').change(function () {
                    $(this).addClass('selected');
                    $('.at_method_select[data-click="roundsToDrink"]').val('');
                    $('.at_method_select[data-click="roundsToDrink"], .at_method_select[data-click="preferredCd"]').removeClass('selected');
                });

                $('.at_method_select').click(function () {
                    $('#at_msg').text('');
                    if ($(this).data('click') == 'strongest') {
                        $('.at_method_select[data-click="highest"], .at_method_select[data-click="preferred"]').removeClass('selected');
                        $('#at_adventure').prop('selectedIndex', 0);
                        $('#at_adventure').removeClass('selected');
                    } else if ($(this).data('click') == 'highest') {
                        $('.at_method_select[data-click="strongest"], .at_method_select[data-click="preferred"]').removeClass('selected');
                        $('#at_adventure').prop('selectedIndex', 0);
                        $('#at_adventure').removeClass('selected');
                    } else if ($(this).data('click') == 'preferred') {
                        $('.at_method_select[data-click="strongest"], .at_method_select[data-click="highest"]').removeClass('selected');
                        $('#at_adventure').prop('selectedIndex', 0);
                        $('#at_adventure').removeClass('selected');
                    } else if ($(this).data('click') == 'adventurePot') {
                        $('.at_method_select[data-click="adventurePotGrand"], .at_method_select[data-click="energyDrink"]').removeClass('selected');
                        $('.methods.commands').show();
                        $('.adventureBlock, .at_method_select[data-click="selectAll"]').show();
                        $('.group_name').text('Adventure Potion');
                        $('.reset_group').data('list', 'advPotList');
                        $('.group_count').text(JSON.parse(localStorage.getItem('advPotList')).length);
                    } else if ($(this).data('click') == 'adventurePotGrand') {
                        $('.at_method_select[data-click="adventurePot"], .at_method_select[data-click="energyDrink"]').removeClass('selected');
                        $('.methods.commands').show();
                        $('.adventureBlock, .at_method_select[data-click="selectAll"]').show();
                        $('.group_name').text('Adventure Potion Grand');
                        $('.reset_group').data('list', 'advPotGrList');
                        $('.group_count').text(JSON.parse(localStorage.getItem('advPotGrList')).length);
                    } else if ($(this).data('click') == 'energyDrink') {
                        $('.at_method_select[data-click="adventurePotGrand"], .at_method_select[data-click="adventurePot"]').removeClass('selected');
                        $('.methods.commands').show();
                        $('.adventureBlock, .at_method_select[data-click="selectAll"]').hide();
                        $('.group_name').text('Energy Drink');
                        $('.reset_group').data('list', 'energyDrList');
                        $('#potion_number').val('');
                        $('#at_adv_cd').prop('selectedIndex', 0);
                        $('.adventureBlock .at_method_select, #at_adv_cd, .at_method_select[data-click="selectAll"]').removeClass('selected');
                        $('.group_count').text(JSON.parse(localStorage.getItem('energyDrList')).length);
                    } else if ($(this).data('click') == 'preferredCd') {
                        $('#at_adv_cd').prop('selectedIndex', 0);
                        $('#potion_number').val('');
                        $('#at_adv_cd, #potion_number').removeClass('selected');
                    } else if ($(this).data('click') == 'roundsToDrink') {
                        $('#at_adv_cd').prop('selectedIndex', 0);
                        $('#at_adv_cd, .at_method_select[data-click="preferredCd"]').removeClass('selected');
                    } else if ($(this).data('click') == 'groupOnly') {
                        $('.at_method_select[data-click="selectAll"]').removeClass('selected');
                        $('#potion_number, #at_adv_cd').show();
                    } else if ($(this).data('click') == 'selectAll') {

                        $('#potion_number').val('');
                        $('#at_adv_cd').prop('selectedIndex', 0);
                        $('.at_method_select[data-click="groupOnly"], #at_adv_cd, #potion_number').removeClass('selected');
                        $('#potion_number, #at_adv_cd').hide();
                    }
                    $(this).toggleClass('selected');
                });

                $('#at_send').click(function () {
                    var adventure = '';
                    var noNewborns = false;
                    var noNaked = false;
                    var prePotion = $('#at_adv_prepotion').val();
                    if ($('.at_method_select[data-click="highest"]').hasClass('selected')) {
                        adventure = 'highest';
                    } else if ($('.at_method_select[data-click="strongest"]').hasClass('selected')) {
                        adventure = 'strongest';
                    } else if ($('.at_method_select[data-click="preferred"]').hasClass('selected')) {
                        adventure = 'preferred';
                    } else {
                        adventure = $('#at_adventure').children("option:selected").val();
                    }
                    if ($('.at_method_select.no_newborns').hasClass('selected')) {
                        noNewborns = true;
                    }
                    if ($('.at_method_select.no_naked').hasClass('selected')) {
                        noNaked = true;
                    }

                    clickATSend(adventure, noNewborns, noNaked, prePotion);
                });

                $('.reset_group').click(function () {
                    localStorage.setItem($(this).data('list'), JSON.stringify([]));
                    $('.group_count').text('0');
                    $('#at_msg_pot').text('group reset');
                });

                $('#at_drink').click(function () {
                    if ((!$('.at_method_select[data-click="selectAll"]').hasClass('selected') && !$('.at_method_select[data-click="groupOnly"]').hasClass('selected')) || (!$('.adventureBlock .at_method_select').hasClass('selected') && !$('#at_adv_cd').hasClass('selected') && !$('.at_method_select[data-click="energyDrink"]').hasClass('selected'))) {
                        $('#at_msg_pot').text('Please make selection and choose potion usage.');
                    } else {
                        var subject = $('.at_method_select[data-click="selectAll"]').hasClass('selected') ? 'all' : 'group';
                        if ($('.items-pots .at_method_select.selected').data('click') == 'adventurePot') {
                            var item = 'ElixirAdventure';
                        } else if ($('.items-pots .at_method_select.selected').data('click') == 'adventurePotGrand') {
                            var item = 'ElixirAdventureGrand';
                        } else if ($('.items-pots .at_method_select.selected').data('click') == 'energyDrink') {
                            var item = 'ElixirEnergy';
                        }

                        if ($('#potion_number').val() > 0) {
                            var method = "limit";
                            var number = $('#potion_number').val()
                        } else {
                            if ($("#at_adv_cd option:selected").val() != "") {
                                var method = $("#at_adv_cd option:selected").val();
                            } else {
                                var method = "preferred";
                            }
                        }
                        clickATPotion(item, subject, method, number);
                    }
                });
            }
            $(document).bind('keydown', function (e) {
                if (e.keyCode === 188) {
                    if ($('#dcmExtras').is(":hidden")) {
                        getSetBonuses();
                    }
                    $('#dcmExtras').toggle();
                }
            });
            $('.qm_extras a').on("click", function (e) {
                e.preventDefault();
                getSetBonuses();
                $('#dcmExtras').show();
            });
            $('.at_popup_close').on("click", function () {
                $('#dcmExtras').hide();
            })


            if ($('.etherGasPrices').length > 0) {
                currentDateTime = new Date();
                lastUpdated = ("0" + currentDateTime.getHours()).slice(-2) + ":" + ("0" + currentDateTime.getMinutes()).slice(-2) + ":" + ("0" + currentDateTime.getSeconds()).slice(-2);
                $('#slVal').text(configDynamic.gasPrices.Slow30min / 1000000000);
                $('#stVal').text(configDynamic.gasPrices.Medium5min / 1000000000);
                $('.gasUpdated').text(lastUpdated);
            }


            // ping(accessToken, function (res) {
            //     console.log(res);
            // });

        }
    }
};

// Create an observer instance linked to the callback function
var observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);