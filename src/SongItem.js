import {BiTrashAlt} from 'react-icons/bi'
import './SongItem.css'

const SongItem = props => {
  const {song, onRemoveItem} = props
  const {imageUrl, name, genre, duration, id} = song

  const removeSongFromPlayist = () => {
    onRemoveItem(id)
  }

  return (
    <li className="song-list-item">
      <div className="song-image-name-container">
        <img className="song-item-image" src={imageUrl} />
        <div className="song-name-container">
          <h1 className="song-item-name">{name}</h1>
          <p className="song-genre">{genre}</p>
        </div>
      </div>
      <div className="song-duration-container">
        <p className="song-item-name">{duration}</p>
        <button onClick={removeSongFromPlayist} className="trash-button">
          <BiTrashAlt className="trash-icon" />
        </button>
      </div>
    </li>
  )
}

export default SongItem
