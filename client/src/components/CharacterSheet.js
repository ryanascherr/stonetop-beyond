import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CHARACTER } from '../utils/queries';
import $ from 'jquery';

const CharacterSheet = () => {
    
    let { data } = useQuery(QUERY_CHARACTER, {
      variables: { name: "Murdoc" }
    });

    console.log(data);
    
    const currentCharacter = data?.getCharacter || [];
    
    const listOfCharacters = currentCharacter.map(character => {
        return <div className="content" key={character._id}>
          <h2>{character.name} {character.playbook}</h2>
          <div className="character-sheet-stat-container">
          <div className="three-stats">
                <div className="character-sheet-stat">
                    <h2>1</h2>
                    <h3>Armor</h3>
                </div>
                <div className="character-sheet-stat">
                    <h2>7</h2>
                    <h3>XP</h3>
                </div>
                <div className="character-sheet-stat">
                    <h2>2</h2>
                    <h3>Level</h3>
                </div>
            </div>
            <div className="two-stats">
                <div className="character-sheet-stat">
                    <h2>d6</h2>
                    <h3>Damage</h3>
                </div>
                <div className="character-sheet-stat">
                    <h2>18</h2>
                    <h3>HP (max 18)</h3>
                </div>
            </div>
            <div className="two-stats">
                <div className="character-sheet-stat">
                    <h3>Strength</h3>
                    <h2>{character.str}</h2>
                    <h3 className="fixed">(STR)</h3>
                </div>
                <input type="checkbox" name="weakened" value=""></input>
                <div className="character-sheet-stat">
                    <h3>Dexterity</h3>
                    <h2>{character.dex}</h2>
                    <h3>(DEX)</h3>
                </div>
            </div>
            <div className="two-stats">
                <div className="character-sheet-stat">
                    <h3>Intelligence</h3>
                    <h2>{character.int}</h2>
                    <h3>(INT)</h3>
                </div>
                <input type="checkbox" name="dazed" value=""></input>
                <div className="character-sheet-stat">
                    <h3>Wisdom</h3>
                    <h2>{character.wis}</h2>
                    <h3>(WIS)</h3>
                </div>
            </div>
            <div className="two-stats">
                <div className="character-sheet-stat">
                    <h3>Constitution</h3>
                    <h2>{character.con}</h2>
                    <h3>(CON)</h3>
                </div>
                <input type="checkbox" name="miserable" value=""></input>
                <div className="character-sheet-stat">
                    <h3>Charisma</h3>
                    <h2>{character.cha}</h2>
                    <h3>(CHA)</h3>
                </div>
            </div>
          </div>
        </div>
      })
    
    return (
        <div>
            {listOfCharacters}
        </div>
    )
    
    }
    
    export default CharacterSheet;