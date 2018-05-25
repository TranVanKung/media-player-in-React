import React from 'react';
import ReactDOM from 'react-dom';
import { MediaPlayerWrapper } from './MediaPlayer.style';
import preBtn from '../../../public/images/Pre.png';
import nextBtn from '../../../public/images/Next.png';
import pauseBtn from '../../../public/images/Pause.png';
import playBtn from '../../../public/images/Play.png';
import Song1 from '../../../public/songs/Song1.mp3';
import Song2 from '../../../public/songs/Song2.mp3';
import Song3 from '../../../public/songs/Song3.mp3';

export default class MediaPlayer extends React.Component  {
  constructor(props) {
    super(props);
    this.songs = [Song1, Song2, Song3];
    this.currentSong = 0;

    this.playSong = this.playSong.bind(this);
    this.playOrPauseSong = this.playOrPauseSong.bind(this);
    this.convertTime = this.convertTime.bind(this);
    this.totalTime = this.totalTime.bind(this);
    this.next = this.next.bind(this);
    this.pre = this.pre.bind(this);

    this.song = new Audio();

  }

  componentDidMount() {
      window.onload = this.playSong;

      this.fillBar = ReactDOM.findDOMNode(this.refs.barFill);
      this.currentTime = ReactDOM.findDOMNode(this.refs.time);

      this.song.addEventListener('timeupdate', () => {

         let position = this.song.currentTime / this.song.duration;
         this.fillBar.style.width = position * 100 + '%';
         this.convertTime(Math.round(this.song.currentTime));

         if (this.song.ended) {
           this.next();
         }
       });
  }

  playSong() {
      this.song.src = this.songs[this.currentSong];  //set the source of 0th song
      this.song.play();    // play the song
  }

  playOrPauseSong() {
      if (this.song.paused) {
          this.song.play();
          ReactDOM.findDOMNode(this.refs.toggleButton).src = pauseBtn;
      }
      else {
          this.song.pause();
          ReactDOM.findDOMNode(this.refs.toggleButton).src = playBtn;
      }
  }



  convertTime(seconds) {
    var min = Math.floor(seconds / 60);
    var sec = seconds % 60;

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    this.currentTime.textContent = min + ":" + sec;

    this.totalTime(Math.round(this.song.duration));
  }

  totalTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    this.currentTime.textContent += "/" + min + ":" + sec;
  }

  next() {
      this.currentSong++;

      if (this.currentSong > this.songs.length - 1) {
          this.currentSong = 0;
      }

      this.playSong();
      ReactDOM.findDOMNode(this.refs.toggleButton).src = pauseBtn;
  }

  pre() {
      this.currentSong--;

      if(this.currentSong < 0){
          this.currentSong = this.songs.length;
      }

      this.playSong();
      ReactDOM.findDOMNode(this.refs.toggleButton).src = pauseBtn;
  }

  render() {
    return (
      <MediaPlayerWrapper>
        <div className="main">
          <div className="main__title">
            <h2>This is title</h2>
          </div>

          <div className="main__player">
            <div className="select-options">
              <select className="select-dropdown">
                <option value="mienBac">Mien Nam</option>
                <option value="mienNam" defaultValue>Mien Bac</option>
                <option value="mienTrung">Mien Trung</option>
              </select>
            </div>

            <div className="buttons">
              <button className="buttons__pre" onClick={this.pre}>
                <img src={preBtn}/>
              </button>
              <button className="buttons__play" onClick={this.playOrPauseSong}>
                <img src={pauseBtn} ref="toggleButton"/>
              </button>
              <button className="buttons__next" onClick={this.next}>
                <img src={nextBtn} ref="nextImg"/>
              </button>
            </div>

            <div className="time-bar">
              <div className="bar">
                <div id="bar__fill" ref="barFill"/>
                <div className="bar__handle" />
              </div>

              <div id="time" ref="time">00:00 / 00:00</div>
            </div>
          </div>
        </div>
      </MediaPlayerWrapper>
    );
  }
}
