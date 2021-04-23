class Transform
{
    constructor(position, width, height)
    {
        this.position = position;
        this.width = width;
        this.height = height;
    }

    getAbsPath()
    {
        return new Vector2(this.position.x,canvasHeight - (this.position.y + this.height));
    }
}