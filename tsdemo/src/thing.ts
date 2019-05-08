import { INamed } from './common';
import { Animal } from './animal';
import { Color } from './colors';

export class Thing implements INamed
{
    private m_animal: Animal;
    private m_color: Color;

    public get animal(): Animal
    {
        return this.m_animal;
    }

    public get color(): Color
    {
        return this.m_color;
    }

    public get name(): string
    {
        return `${this.m_color.name} ${this.m_animal.name}`;
    }

    constructor(color: Color, animal: Animal)
    {
        this.m_animal = animal;
        this.m_color = color;
    }
}

function pickOne<T>(list: Array<T>): T
{
    var index = Math.floor(Math.random() * list.length);
    return list[index];
}
    
export var makeThing = (colorList: Array<Color>, animalList: Array<Animal>) =>
{
    return new Thing(pickOne(colorList), pickOne(animalList));
};