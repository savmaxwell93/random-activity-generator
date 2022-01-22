import React from 'react';

const TypeSearch = () => {
    return(
      <div className="type-search-container">
        <h2>Want to search by type?</h2>
        <p>Random about information</p>
        <form>
          <label>
            Choose a type of activity!
            <select>
              <option value="choose">--Choose an Option--</option>
              <option value="education">Education</option>
              <option value="recreational">Recreational</option>
              <option value="social">Social</option>
              <option value="diy">DIY</option>
              <option value="charity">Charity</option>
              <option value="cooking">Cooking</option>
              <option value="relaxation">Relaxation</option>
              <option value="music">Music</option>
              <option value="busywork">Busywork</option>
            </select>
            <button>Generate By Type!</button>
          </label>
        </form>
      </div>
    )
}

export default TypeSearch;