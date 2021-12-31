interface challengesStomach {
    id: number;
    challenge: string;
}
interface NewStomach {
    challenge: string;
}

interface UpdateStomach {
    challenge?: string;
}

export { challengesStomach, NewStomach, UpdateStomach};