import { Request, Respose } from 'express';

export let hi = (req: Request, res: Respose) => {
    res.send("Hello");
}

export let awesome = (req: Request, res: Respose) => {
    res.send("Everithing is awesome");
}