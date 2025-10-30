import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Language, Series, GameState, Song, User, ArtGalleryItem, Gift } from './types';
import { SERIES_DATA, UI_TEXT, MUSIC_DATA } from './constants';
import { loadUser, saveUser } from './services/userService';
import LoginScreen from './components/LoginScreen';
import RegistrationScreen from './components/RegistrationScreen';
import AvatarSelectionScreen from './components/AvatarSelectionScreen';
import LanguageSelector from './components/LanguageSelector';
import SplashScreen from './components/SplashScreen';
import SeriesSelection from './components/SeriesSelection';
import GameModeSelection from './components/GameModeSelection';
import TeamLobbyScreen from './components/TeamLobbyScreen';
import QuizScreen from './components/QuizScreen';
import ResultsScreen from './components/ResultsScreen';
import MusicPlaylist from './components/MusicPlaylist';
import TicTacToeScreen from './components/TicTacToeScreen';
import AdScreen from './components/AdScreen';
import ProfileScreen from './components/ProfileScreen';
import PlayerProfileModal from './components/PlayerProfileModal';
import ChatScreen from './components/ChatScreen';
import MusicControlPopover from './components/MusicControlPopover';
import BrainstormScreen from './components/BrainstormScreen';
import ArtGalleryScreen from './components/ArtGalleryScreen';
import ArtDetailModal from './components/ArtDetailModal';

const App: React.FC = () => {
    const [gameState, setGameState] = useState<GameState>(GameState.SplashScreen);
    const [language, setLanguage] = useState<Language>(Language.EN);
    const [user, setUser] = useState<User | null>(null);
    const [registrationData, setRegistrationData] = useState<{name: string, email: string} | null>(null);
    const [selectedSeries, setSelectedSeries] = useState<Series | null>(null);
    const [isTeamMode, setIsTeamMode] = useState(false);
    const [quizResults, setQuizResults] = useState({ score: 0, correct: 0, total: 0 });
    const [isMusicPlaying, setIsMusicPlaying] = useState(false);
    const [isPlaylistOpen, setIsPlaylistOpen] = useState(false);
    const [isMusicControlOpen, setIsMusicControlOpen] = useState(false);
    const [currentSong, setCurrentSong] = useState<Song | null>(null);
    const [currentSongIndex, setCurrentSongIndex] = useState<number | null>(null);
    const [isAdVisible, setIsAdVisible] = useState(false);
    const [modalUser, setModalUser] = useState<User | null>(null);
    const [chattingWith, setChattingWith] = useState<User | null>(null);
    const [selectedArtItem, setSelectedArtItem] = useState<ArtGalleryItem | null>(null);
    
    const musicRef = useRef<HTMLAudioElement | null>(null);
    const adTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const wasMusicPlayingRef = useRef(false);
    const gameStateRef = useRef(gameState);

    useEffect(() => {
        // This effect runs only once on app startup.
        const splashTimer = setTimeout(() => {
            const savedUser = loadUser();
            if (savedUser) {
                setUser(savedUser);
                setGameState(GameState.SeriesSelection);
                // Setup music state for logged-in user
                const playlist = MUSIC_DATA[language]; // Uses default language 'en'
                setCurrentSong(playlist[0]);
                setCurrentSongIndex(0);
            } else {
                setGameState(GameState.Login);
            }
        }, 2000); // Show splash screen for 2 seconds

        return () => clearTimeout(splashTimer);
    }, []); // The empty dependency array ensures this effect runs only once on mount.

    useEffect(() => {
        gameStateRef.current = gameState;
    }, [gameState]);

    const playSongAtIndex = useCallback((index: number, lang: Language) => {
        const playlist = MUSIC_DATA[lang];
        if (!musicRef.current || !playlist || index < 0 || index >= playlist.length) return;
        const song = playlist[index];
        setCurrentSong(song);
        setCurrentSongIndex(index);
        musicRef.current.src = song.src;
        musicRef.current.play().then(() => {
            setIsMusicPlaying(true);
        }).catch(e => {
            console.error("Music play failed:", e);
            setIsMusicPlaying(false);
        });
    }, []);
    
    const handleNextSong = useCallback(() => {
        const playlist = MUSIC_DATA[language];
        if (currentSongIndex === null) {
            playSongAtIndex(0, language);
        } else {
            const nextIndex = (currentSongIndex + 1) % playlist.length;
            playSongAtIndex(nextIndex, language);
        }
    }, [currentSongIndex, language, playSongAtIndex]);

    useEffect(() => {
        const musicElement = new Audio();
        musicElement.addEventListener('ended', handleNextSong);
        musicRef.current = musicElement;

        return () => {
            musicElement.removeEventListener('ended', handleNextSong);
            if (adTimerRef.current) clearInterval(adTimerRef.current);
        }
    }, [handleNextSong]);

    const handleTogglePlaylist = useCallback(() => {
        setIsPlaylistOpen(prev => !prev);
    }, []);

    const handleSelectSong = useCallback((song: Song, index: number) => {
        if (musicRef.current) {
            setCurrentSong(song);
            setCurrentSongIndex(index);
            musicRef.current.src = song.src;
            musicRef.current.play().then(() => setIsMusicPlaying(true)).catch(e => console.error("Music play failed:", e));
            setIsPlaylistOpen(false);
        }
    }, []);

    const handlePlayPause = () => {
        if (!musicRef.current) return;
        if (!musicRef.current.src) {
            playSongAtIndex(currentSongIndex ?? 0, language);
            return;
        }

        if (isMusicPlaying) {
            musicRef.current.pause();
        } else {
            musicRef.current.play().catch(e => console.error("Music play failed:", e));
        }
        setIsMusicPlaying(prev => !prev);
    };

    const handlePrevSong = useCallback(() => {
        const playlist = MUSIC_DATA[language];
        if (currentSongIndex === null) {
            playSongAtIndex(0, language);
        } else {
            const prevIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
            playSongAtIndex(prevIndex, language);
        }
    }, [currentSongIndex, language, playSongAtIndex]);

    const handleCloseAd = () => {
        setIsAdVisible(false);
        if (wasMusicPlayingRef.current && musicRef.current) {
            musicRef.current.play().catch(e => console.error("Music resume failed:", e));
            setIsMusicPlaying(true);
        }
    };

    useEffect(() => {
        if (isAdVisible) {
            wasMusicPlayingRef.current = isMusicPlaying;
            if (isMusicPlaying && musicRef.current) {
                musicRef.current.pause();
                setIsMusicPlaying(false);
            }
        }
    }, [isAdVisible, isMusicPlaying]);

    const handleStartRegistration = () => {
        setGameState(GameState.Registration);
    };

    const handleCompleteRegistration = (name: string, email: string) => {
        setRegistrationData({ name, email });
        setGameState(GameState.AvatarSelection);
    };
    
    const handleSelectAvatar = (avatarUrl: string) => {
        if (!registrationData) return;
    
        const newUser: User = {
            id: `user_${Date.now()}`,
            name: registrationData.name,
            avatarUrl,
            totalCoins: 100, // Welcome bonus!
            totalScore: 0,
            questionsAnswered: 0,
            correctAnswers: 0,
            ticTacToeWins: 0,
            friends: [],
            friendRequests: [],
            countryCode: 'MA', // Default country code
        };
    
        setUser(newUser);
        saveUser(newUser);
        setGameState(GameState.LanguageSelection);
    };

    const handleSelectLanguage = (lang: Language) => {
        setLanguage(lang);
        setGameState(GameState.SplashScreen);

        if (adTimerRef.current) clearInterval(adTimerRef.current);
        adTimerRef.current = setInterval(() => {
            const currentGameState = gameStateRef.current;
            if (![GameState.Login, GameState.LanguageSelection, GameState.SplashScreen, GameState.Results].includes(currentGameState)) {
                setIsAdVisible(true);
            }
        }, 120000); // 2 minutes
        
        const playlist = MUSIC_DATA[lang];
        setCurrentSong(playlist[0]);
        setCurrentSongIndex(0);

        setTimeout(() => {
            setGameState(GameState.SeriesSelection);
        }, 2000);
    };

    const handleSelectSeries = (series: Series) => {
        setSelectedSeries(series);
        if (series.id === 'brainstorming') {
            setGameState(GameState.Brainstorming);
        } else if (series.id === 'art_gallery') {
            setGameState(GameState.ArtGallery);
        } else {
            setGameState(GameState.GameModeSelection);
        }
    };

    const handleSelectGameMode = (isTeam: boolean) => {
        setIsTeamMode(isTeam);
        if (isTeam) {
            setGameState(GameState.TeamLobby);
        } else {
            setGameState(GameState.Quiz);
        }
    };

    const handleStartChallenge = () => {
        setGameState(GameState.Quiz);
    };

    const handleUpdateUser = (updatedUser: User) => {
        setUser(updatedUser);
        saveUser(updatedUser);
    };

    const handleQuizEnd = (score: number, correct: number, total: number) => {
        if (user) {
            const updatedUser = { ...user };
            
            if (selectedSeries?.id === 'tic_tac_toe') {
                updatedUser.ticTacToeWins += correct; // 'correct' is used for wins in tic-tac-toe
            } else {
                updatedUser.questionsAnswered += total;
                updatedUser.correctAnswers += correct;
                updatedUser.totalCoins += correct * 10; // 10 coins per correct answer
            }
            
            updatedUser.totalScore += score;
            
            setUser(updatedUser);
            saveUser(updatedUser);
        }
        setQuizResults({ score, correct, total });
        setGameState(GameState.Results);
    };

    const handlePlayAgain = () => {
        setSelectedSeries(null);
        setGameState(GameState.SeriesSelection);
    };

    const handleGoBack = () => {
        setSelectedSeries(null);
        setGameState(GameState.SeriesSelection);
    };

    const handleSendFriendRequest = (targetUser: User) => {
        // This simulates another user sending a request to the current player for demo purposes.
        setTimeout(() => {
            setUser(currentUser => {
                if (!currentUser) return null;
                if (currentUser.friendRequests.some(r => r.id === targetUser.id) || currentUser.friends.some(f => f.id === targetUser.id)) {
                    return currentUser;
                }
                const updatedUser = {
                    ...currentUser,
                    friendRequests: [...currentUser.friendRequests, { id: targetUser.id, name: targetUser.name, avatarUrl: targetUser.avatarUrl, countryCode: targetUser.countryCode }],
                };
                saveUser(updatedUser);
                return updatedUser;
            });
        }, 2000);
        setModalUser(null);
    };

    const handleAcceptFriendRequest = (requestingUser: Pick<User, 'id' | 'name' | 'avatarUrl' | 'countryCode'>) => {
        setUser(currentUser => {
            if (!currentUser) return null;
            const updatedUser = {
                ...currentUser,
                friends: [...currentUser.friends, requestingUser],
                friendRequests: currentUser.friendRequests.filter(req => req.id !== requestingUser.id),
            };
            saveUser(updatedUser);
            return updatedUser;
        });
    };

    const handleDeclineFriendRequest = (requestingUser: Pick<User, 'id' | 'name' | 'avatarUrl' | 'countryCode'>) => {
        setUser(currentUser => {
            if (!currentUser) return null;
            const updatedUser = {
                ...currentUser,
                friendRequests: currentUser.friendRequests.filter(req => req.id !== requestingUser.id),
            };
            saveUser(updatedUser);
            return updatedUser;
        });
    };

    const handleOpenChat = (friend: User) => {
        setChattingWith(friend);
        setGameState(GameState.Chat);
    };

    const renderContent = () => {
        switch (gameState) {
            case GameState.Login:
                return <LoginScreen onLogin={handleStartRegistration} />;
            case GameState.Registration:
                return <RegistrationScreen 
                            onRegister={handleCompleteRegistration}
                            onBack={() => setGameState(GameState.Login)}
                            language={language}
                        />;
            case GameState.AvatarSelection:
                return <AvatarSelectionScreen
                            onSelectAvatar={handleSelectAvatar}
                            onBack={() => setGameState(GameState.Registration)}
                            language={language}
                        />;
            case GameState.LanguageSelection:
                return <LanguageSelector onSelectLanguage={handleSelectLanguage} title={UI_TEXT[language].selectLanguage} />;
            case GameState.SplashScreen:
                return <SplashScreen appName={UI_TEXT[language].appName} />;
            case GameState.SeriesSelection:
                if (!user) return null;
                return (
                    <SeriesSelection
                        seriesList={SERIES_DATA}
                        onSelectSeries={handleSelectSeries}
                        language={language}
                        appName={UI_TEXT[language].appName}
                        user={user}
                        onProfileClick={() => setGameState(GameState.Profile)}
                        onSocialClick={() => setGameState(GameState.Profile)}
                        onMusicClick={() => setIsMusicControlOpen(true)}
                    />
                );
            case GameState.GameModeSelection:
                return <GameModeSelection onSelectMode={handleSelectGameMode} onBack={() => setGameState(GameState.SeriesSelection)} language={language} />;
            case GameState.TeamLobby:
                if (!user || !selectedSeries) return null;
                return <TeamLobbyScreen 
                    onStart={handleStartChallenge} 
                    user={user} 
                    series={selectedSeries} 
                    onBack={() => setGameState(GameState.GameModeSelection)} 
                    language={language} 
                    onViewProfile={setModalUser}
                    onUpdateUser={handleUpdateUser} 
                />;
            case GameState.Quiz:
                if (!selectedSeries) return null;
                 if (selectedSeries.id === 'tic_tac_toe') {
                    return <TicTacToeScreen 
                                series={selectedSeries} 
                                language={language} 
                                onQuizEnd={handleQuizEnd}
                                onMusicClick={() => setIsMusicControlOpen(true)}
                                onGoBack={handleGoBack}
                            />;
                }
                return <QuizScreen 
                            series={selectedSeries} 
                            language={language} 
                            onQuizEnd={handleQuizEnd}
                            onMusicClick={() => setIsMusicControlOpen(true)}
                            onGoBack={handleGoBack}
                            isTeamMode={isTeamMode}
                            user={user}
                        />;
            case GameState.Results:
                 const resultTexts = selectedSeries?.id === 'tic_tac_toe' 
                    ? { correctLabel: UI_TEXT[language].wins, wrongLabel: "" }
                    : { correctLabel: UI_TEXT[language].correctAnswers, wrongLabel: UI_TEXT[language].wrongAnswers };

                return <ResultsScreen 
                            score={quizResults.score}
                            correctAnswers={quizResults.correct}
                            totalQuestions={quizResults.total}
                            language={language}
                            onPlayAgain={handlePlayAgain}
                            {...resultTexts}
                        />;
            case GameState.Profile:
                if (!user) return null;
                return <ProfileScreen 
                    user={user} 
                    onBack={() => setGameState(GameState.SeriesSelection)} 
                    language={language}
                    onAcceptFriend={handleAcceptFriendRequest}
                    onDeclineFriend={handleDeclineFriendRequest}
                    onOpenChat={handleOpenChat}
                    onUpdateUser={handleUpdateUser}
                />;
            case GameState.Chat:
                if (!user || !chattingWith) return null;
                return <ChatScreen 
                    user={user} 
                    friend={chattingWith as User} 
                    onBack={() => setGameState(GameState.Profile)} 
                    language={language} 
                />;
            case GameState.Brainstorming:
                 if (!user || !selectedSeries) return null;
                 return <BrainstormScreen
                    user={user}
                    series={selectedSeries}
                    language={language}
                    onBack={handleGoBack}
                    onMusicClick={() => setIsMusicControlOpen(true)}
                 />;
            case GameState.ArtGallery:
                return <ArtGalleryScreen
                    language={language}
                    onBack={handleGoBack}
                    onSelectItem={setSelectedArtItem}
                    onMusicClick={() => setIsMusicControlOpen(true)}
                />;
            default:
                return <SplashScreen appName={UI_TEXT[language].appName} />;
        }
    };

    return (
        <div className="vip-background" dir={language === 'ar' ? 'rtl' : 'ltr'}>
            <div className="content-wrapper">
                {renderContent()}
            </div>
            {isAdVisible && <AdScreen onClose={handleCloseAd} />}
            {modalUser && user && (
                <PlayerProfileModal
                    player={modalUser}
                    currentUser={user}
                    onClose={() => setModalUser(null)}
                    onAddFriend={handleSendFriendRequest}
                    language={language}
                />
            )}
            {selectedArtItem && (
                <ArtDetailModal 
                    item={selectedArtItem}
                    onClose={() => setSelectedArtItem(null)}
                    language={language}
                />
            )}
            <MusicPlaylist 
                isOpen={isPlaylistOpen}
                onClose={handleTogglePlaylist}
                musicData={MUSIC_DATA}
                onSelectSong={handleSelectSong}
                currentSong={currentSong}
                language={language}
            />
             <MusicControlPopover 
                isOpen={isMusicControlOpen}
                onClose={() => setIsMusicControlOpen(false)}
                isPlaying={isMusicPlaying}
                currentSong={currentSong}
                onPlayPause={handlePlayPause}
                onNext={handleNextSong}
                onPrev={handlePrevSong}
                onOpenPlaylist={() => {
                    setIsMusicControlOpen(false);
                    handleTogglePlaylist();
                }}
            />
        </div>
    );
};

export default App;