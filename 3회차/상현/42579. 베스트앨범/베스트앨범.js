class Genre {
    constructor(no, play) {
        this.musicList = [no]
        this.play = play
    }
    
    streaming(no, play) {
        this.musicList.push(no)
        this.play += play
    }
    
    getBestMusic (playList) {
        if (this.musicList.length < 2) {
            return this.musicList
        }
        return [...this.musicList]
            .sort((a, b) => playList[b] - playList[a])
            .slice(0, 2)
    }
}

function solution(genres, plays) {
    const genreInfo = {}
    
    for (let i = 0; i < genres.length; i++) {
        const genre = genres[i]
        const play = plays[i]
        
        if (genre in genreInfo) {
            genreInfo[genre].streaming(i, play)
        } else {
            genreInfo[genre] = new Genre(i, play)
        }
    }
    
    return Object.values(genreInfo)
        .sort((genre1, genre2) => genre2.play - genre1.play)
        .map((genre) => genre.getBestMusic(plays))
        .flat()
}