import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_CHARACTER } from '../utils/queries';
import { UPDATE_CHARACTER_NAME, UPDATE_CHARACTER_CURRENT_HP } from '../utils/mutations';
import { useParams } from 'react-router-dom';
import $ from 'jquery';
import icon from '../img/icon-heavy.png';
import editIcon from '../img/edit-icon.png'
import Auth from '../utils/auth';

const CharacterStats = () => {

    if (!Auth.loggedIn) {
        window.location.assign('/');
    }

    let result;
    let damage;
    let roll1;
    let roll2;

    $(document).ready(function () {
        $(".damage-btn").click(function () {
            damage = $(this).data("damage");
            damageRoll(damage);
            $(".success-level").text("");
            $(".roll-result").text(`Damage: ${result}`);
            window.scrollTo({
                top: 1000,
                behavior: 'smooth',
            })
        })
    });

    function damageRoll(damage) {
        result = Math.floor(Math.random() * damage) + 1;
    }

    $(document).ready(function () {
        $(".stat-btn").click(function () {
            let number = parseInt($(this).data("number"));
            let stat = $(this).data("stat");
            statRoll(number);
            if (result > 9) {
                $(".success-level").removeClass("red");
                $(".success-level").removeClass("blue");
                $(".success-level").addClass("green");
                $(".success-level").text("Full Success!");
            } else if (result > 6) {
                $(".success-level").removeClass("red");
                $(".success-level").removeClass("green");
                $(".success-level").addClass("blue");
                $(".success-level").text("Partial Success!");
            } else {
                $(".success-level").removeClass("green");
                $(".success-level").removeClass("blue");
                $(".success-level").addClass("red");
                $(".success-level").text("Failure...Mark Experience!");
            }
            $(".roll-result").text(`${roll1} + ${roll2} + ${stat}(${number}) = ${result}`);
            window.scrollTo({
                top: 1000,
                behavior: 'smooth',
            })
        })
    })

    function statRoll(number) {
        roll1 = Math.floor(Math.random() * 6) + 1;
        roll2 = Math.floor(Math.random() * 6) + 1;
        result = roll1 + roll2 + number;
    }

    $('input[name=weakened]').change(function () {
        if ($(this).is(':checked')) {
            $("#str").addClass("red-background");
            $("#dex").addClass("red-background");
        } else {
            $("#str").removeClass("red-background");
            $("#dex").removeClass("red-background");
        }
    });

    $('input[name=dazed]').change(function () {
        if ($(this).is(':checked')) {
            $("#int").addClass("red-background");
            $("#wis").addClass("red-background");
        } else {
            $("#int").removeClass("red-background");
            $("#wis").removeClass("red-background");
        }
    });

    $('input[name=miserable]').change(function () {
        if ($(this).is(':checked')) {
            $("#con").addClass("red-background");
            $("#cha").addClass("red-background");
        } else {
            $("#con").removeClass("red-background");
            $("#cha").removeClass("red-background");
        }
    });

    const { characterId } = useParams();

    const { data } = useQuery(QUERY_CHARACTER, {
        variables: { _id: characterId },
    });

    const character = data?.getCharacter || {};

    const [updateCharacterName] = useMutation(UPDATE_CHARACTER_NAME);

    $(document).ready(function () {
        $("#edit-name").click(function () {
            $(".edit-name-container-container").removeClass("hidden");
        })
    });

    $(document).ready(function () {
        $(".edit-name-select").click(function () {
            let name = $(".new-name").val().trim();
            console.log(name);
            let _id = $(this).data("id");

            if (!name) {
                return alert("Please enter a name");
            } else {
                try {
                    const { data } = updateCharacterName({
                        variables: { _id, name }
                    })
                } catch (e) {
                    console.error(e);
                }
                $(".edit-name-container-container").addClass("hidden");
                window.location.reload();
            }
        })
    });

    $(document).ready(function () {
        $(".close-edit-name").click(function () {
            $(".edit-name-container-container").addClass("hidden");
        })
    });

    const [updateCharacterCurrentHP] = useMutation(UPDATE_CHARACTER_CURRENT_HP);

    $(document).ready(function () {
        $("#edit-hp").click(function () {
            $(".edit-hp-container-container").removeClass("hidden");
        })
    });

    $(document).ready(function () {
        $(".edit-hp-select").click(function () {
            let currentHP = $(".new-hp").val();
            let _id = $(this).data("id");

            try {
                const { data } = updateCharacterCurrentHP({
                    variables: { _id, currentHP }
                })
            } catch (e) {
                console.error(e);
            }
            $(".edit-hp-container-container").addClass("hidden");
            window.location.reload();
        })
    });

    $(document).ready(function () {
        $(".close-edit-hp").click(function () {
            $(".edit-hp-container-container").addClass("hidden");
        })
    });

    return (
        <div className="content character-sheet-page">
            <div className="character-sheet-title">
                <h1>{character.name} {character.playbook}</h1>
                <div className="edit-image-container" id="edit-name" data-id={character._id}>
                    <img src={editIcon} className="edit-image" alt=""></img>
                </div>
            </div>
            <div className="hidden edit-name-container-container">
                <div className="edit-name-container">
                    <h2>New Name:</h2>
                    <input className="new-name"></input>
                    <div className="name-btn-container">
                        <button className="edit-name-select btn-inverse" data-id={character._id}>Select</button>
                        <button className="close-edit-name btn-inverse">Close</button>
                    </div>
                </div>
            </div>
            <div className="character-sheet-stat-container">
                <div className="two-stats">
                    <div className="character-sheet-stat">
                        <h2 className="stat-number damage-btn" data-damage={character.damage}>d{character.damage}</h2>
                        <h3 className="stat-lower">Damage</h3>
                    </div>
                    <div className="playbook-image-container">
                        <img src={icon} className="playbook-image" alt="Icon"></img>
                    </div>
                    <div className="character-sheet-stat">
                        <h2>{character.currentHP}</h2>
                        <div className="edit-image-container" id="edit-hp" data-id={character._id}>
                            <img src={editIcon} className="edit-image" alt=""></img>
                        </div>
                        <h3 className="stat-lower wider">HP (max {character.maxHP})</h3>
                    </div>
                </div>
                <div className="hidden edit-hp-container-container">
                    <div className="edit-hp-container">
                        <h2>New HP:</h2>
                        <input className="new-hp"></input>
                        <div className="hp-btn-container">
                            <button className="edit-hp-select btn-inverse" data-id={character._id} >Select</button>
                            <button className="close-edit-hp btn-inverse">Close</button>
                        </div>
                    </div>
                </div>
                <div className="three-stats">
                    <div className="character-sheet-stat">
                        <h2>{character.armor}</h2>
                        <h3 className="stat-lower">Armor</h3>
                    </div>
                    <div className="character-sheet-stat">
                        <h2>{character.exp}</h2>
                        <h3 className="stat-lower">XP</h3>
                    </div>
                    <div className="character-sheet-stat">
                        <h2>{character.level}</h2>
                        <h3 className="stat-lower">Level</h3>
                    </div>
                </div>
                <div className="two-stats">
                    <div className="character-sheet-stat">
                        <h3 className="stat-higher">Strength</h3>
                        <h2 className="stat-number stat-btn" data-number={character.str} data-stat="STR" id="str">{character.str}</h2>
                        <h3 className="stat-lower">(STR)</h3>
                    </div>
                    <div className="condition-container">
                        <h3>Weakened</h3>
                        <input type="checkbox" name="weakened" value=""></input>
                    </div>
                    <div className="character-sheet-stat">
                        <h3 className="stat-higher">Dexterity</h3>
                        <h2 className="stat-number stat-btn" data-number={character.dex} data-stat="DEX" id="dex">{character.dex}</h2>
                        <h3 className="stat-lower">(DEX)</h3>
                    </div>
                </div>
                <div className="two-stats">
                    <div className="character-sheet-stat">
                        <h3 className="stat-higher">Intelligence</h3>
                        <h2 className="stat-number stat-btn" data-number={character.int} data-stat="INT" id="int">{character.int}</h2>
                        <h3 className="stat-lower">(INT)</h3>
                    </div>
                    <div className="condition-container">
                        <h3>Dazed</h3>
                        <input type="checkbox" name="dazed" value=""></input>
                    </div>
                    <div className="character-sheet-stat">
                        <h3 className="stat-higher">Wisdom</h3>
                        <h2 className="stat-number stat-btn" data-number={character.wis} data-stat="WIS" id="wis">{character.wis}</h2>
                        <h3 className="stat-lower">(WIS)</h3>
                    </div>
                </div>
                <div className="two-stats">
                    <div className="character-sheet-stat">
                        <h3 className="stat-higher">Constitution</h3>
                        <h2 className="stat-number stat-btn" data-number={character.con} data-stat="CON" id="con">{character.con}</h2>
                        <h3 className="stat-lower">(CON)</h3>
                    </div>
                    <div className="condition-container">
                        <h3>Miserable</h3>
                        <input type="checkbox" name="miserable" value=""></input>
                    </div>
                    <div className="character-sheet-stat">
                        <h3 className="stat-higher">Charisma</h3>
                        <h2 className="stat-number stat-btn" data-number={character.cha} data-stat="CHA" id="cha">{character.cha}</h2>
                        <h3 className="stat-lower">(CHA)</h3>
                    </div>
                </div>
            </div>
            <div className="roll-container">
                <h2 className="roll-result"> </h2>
                <h2 className="success-level"> </h2>
            </div>
        </div>
    )
}

export default CharacterStats;