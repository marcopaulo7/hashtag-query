interface TwitterObject {
    data: TwitterData[],
    includes: TwitterInclude,
    meta: TwitterMeta
}

interface TwitterData {
    author_id: string,
    id: string,
    text: string
}

interface TwitterUser {
    id: string,
    name: string,
    username: string
}

interface TwitterInclude {
    user: TwitterUser[]
}

interface TwitterMeta {
    newest_id: string,
    oldest_id: string,
    result_count: number,
    next_token: string
}