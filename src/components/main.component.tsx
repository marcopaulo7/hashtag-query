import '../App.css';
import { useCallback, useState } from 'react';
import { Navbar } from './navbar.component'
import { TweetComponent } from './tweet.component'
import { Tweet } from '../../server/src/model/app.model'
import { SearchIcon } from '@chakra-ui/icons'
import Masonry from 'react-masonry-css'
import { RequestResponse } from '../model/app.model';
import twitter from 'twitter-text';
import { Alert, AlertIcon, Stack, useMediaQuery } from '@chakra-ui/react';

const axios = require('axios').default;
let errorTimeoutId: NodeJS.Timeout

export const Main = () => {
    const [tweets, setTweets] = useState<{ [x: string]: Tweet }>({});
    const [isSearching, setIsSearching] = useState(false);
    const [authorizingIds, setAuthorizingIds] = useState<string[]>([]);
    const [discardingIds, setDiscardingIds] = useState<string[]>([]);
    const [invalidSearch, setInvalidSearch] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSearchClick = useCallback(async (hashtag: string) => {
        if (isSearching) return

        if (!twitter.isValidHashtag(`#${hashtag}`)) {
            setInvalidSearch(true)
            return
        }

        setIsSearching(true)
        setInvalidSearch(false)
        for (let id in tweets) {
            setTweets((tweets: { [x: string]: Tweet }) => {
                delete tweets[id]
                return tweets
            })
        }
        axios.get(`${process.env.REACT_APP_API_URL}/search?hashtag=${hashtag}`)
            .then((response: RequestResponse) => {
                setTweets(response.data)
                console.log(response);
            })
            .catch(function (e: any) {
                console.log(e);
                let errorMessage = 'Erro ao buscar tweets.'
                showErrorAlert(errorMessage)
            })
            .then(function () {
                setIsSearching(false)
            });
    }, [tweets, isSearching])

    const handleAuthorizeClick = useCallback(async (id: string) => {
        setAuthorizingIds([...authorizingIds, id])
        axios.patch(`${process.env.REACT_APP_API_URL}/authorize/${id}`)
            .then((response: RequestResponse) => {
                setTweets(response.data)
                console.log(response);
            })
            .catch(function (e: any) {
                console.log(e);
                let errorMessage = 'Erro ao autorizar o tweet selecionado.'
                showErrorAlert(errorMessage)
            })
            .then(function () {
                setAuthorizingIds(authorizingIds.filter(savedId => savedId !== id))
            });
    }, [authorizingIds])

    const handleDiscardClick = useCallback(async (id: string) => {
        setDiscardingIds([...discardingIds, id])
        axios.delete(`${process.env.REACT_APP_API_URL}/discard${id}`)
            .then((response: RequestResponse) => {
                console.log(response);
                setTweets(response.data)
            })
            .catch(function (e: any) {
                console.log(e);
                let errorMessage = 'Erro ao descartar o tweet selecionado.'
                showErrorAlert(errorMessage)
            })
            .then(function () {
                setDiscardingIds(discardingIds.filter(savedId => savedId !== id))
            })
    }, [discardingIds])

    const showErrorAlert = (errorMessage: string) => {
        clearTimeout(errorTimeoutId)
        setError(true)
        setErrorMessage(errorMessage)
        errorTimeoutId = setTimeout(() => {
            setError(false)
            setErrorMessage('')
        }, 5000)
    }

    const [isSmallScreen] = useMediaQuery('(max-width: 1050px)')

    return (
        <>
            <Navbar placeholder='Entre com a hashtag desejada' fixedSymbol='#' buttonText='Buscar' buttonIcon={<SearchIcon />} onSearchClick={handleSearchClick} isSearching={isSearching} isInvalid={invalidSearch}></Navbar>
            {error &&
                <Stack className='alert' spacing={1} w="100%">
                    <Alert status='error'>
                        <AlertIcon />
                        {errorMessage}
                    </Alert>)
                </Stack>}
            <Masonry breakpointCols={isSmallScreen ? 1 : 2} className={error ? "my-masonry-grid-no-margin-top" : "my-masonry-grid"} columnClassName="my-masonry-grid_column">
                {Object.values(tweets).map((t: any) => {
                    let isAuthorizing = authorizingIds.includes(t.id)
                    let isDiscarding = discardingIds.includes(t.id)
                    return <TweetComponent key={t.id} tweet={t} onAuthorizeClick={handleAuthorizeClick} onDiscardClick={handleDiscardClick} isAuthorizing={isAuthorizing} isDiscarding={isDiscarding}></TweetComponent>
                }
                )}
            </Masonry>
        </>
    );

}