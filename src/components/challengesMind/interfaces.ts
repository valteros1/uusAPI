interface challengesMind {
    id: number;
    challenge: string;
}
interface NewMind {
    challenge: string;
}

interface UpdateMind {
    challenge?: string;
}
export {challengesMind, NewMind, UpdateMind};