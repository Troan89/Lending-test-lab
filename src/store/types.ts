export type Slice_T = {
    fourthBlock: FourthBlock_T[]
    fiveBlock: FiveBlock_T[]
    reviewsItems: ReviewsItems[]
}

interface FourthBlock_T {
    question: string
    answer: string
}

interface FiveBlock_T {
    title: string
    text: string
}

export interface ReviewsItems {
    name: string;
    city: string;
    image:string;
    feedback: string;
}