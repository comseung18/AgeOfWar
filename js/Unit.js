class Unit extends Gobject
{ 
    constructor(name,hp,team,dmg)
    {
        super(name);
        this.hp = hp;
        this.team = team;
        this.dmg = dmg;
    }

}