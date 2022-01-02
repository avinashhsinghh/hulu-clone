const API_KEY = "b993d4824a72272c324527a684f45fac";

export default {
    fetchTrending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    fetchTopRated: {
        title: 'Top Rated',
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    },
    fetchActionMovies: {
        title: 'Action',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    },
    fetchComedyMovies: {
        title: 'Comedy',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    },
    fetchHorrorMovies: {
        title: 'Horror',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    },
    fetchRomanceMovies: {
        title: 'Romance',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    },
    fetchDocumentaries: {
        title: 'Documentaries',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    },
    fetchMystery: {
        title: 'Mystery',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    },
    fetchSciFi: {
        title: 'Sci-Fi',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    },
    fetchWestern: {
        title: 'Western',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
    },
    fetchAnimation: {
        title: 'Animation',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    },
    fetchTV: {
        title: 'TV',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
    },
    fetchTVAction: {
        title: 'TV Action',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10759`,
    },
    fetchTVAdventure: {
        title: 'TV Adventure',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10765`,
    },
};
