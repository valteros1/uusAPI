interface challengesBody {
    id: number;
    challenge: string;
}

interface NewBody {
    challenge: string;
}

interface UpdateBody {
    challenge?: string;
}

export {challengesBody, NewBody, UpdateBody};