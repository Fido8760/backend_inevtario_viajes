import { Table, Model, Column, DataType, HasMany, BelongsTo, ForeignKey } from "sequelize-typescript";
import Unidad from "./Unidad";
import Operador from "./Operador";
import Caja from "./Caja";
import DatosCheckList from "./DatosCheckList";
import UsuariosChecklist from "./UsuariosChecklist";

@Table({
    tableName: 'asignaciones'
})

class Asignacion extends Model {

    @ForeignKey(() => Unidad)
    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })
    declare unidadId: number | null 
    @BelongsTo(() => Unidad, { onDelete: "SET NULL", hooks: true })
    declare unidad: Unidad
    
    @ForeignKey(() => Caja)
    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })
    declare cajaId: number | null
    @BelongsTo(() => Caja, { onDelete: "SET NULL", hooks: true })
    declare caja: Caja

    @ForeignKey(() => Operador)
    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })
    declare operadorId: number | null
    @BelongsTo(() => Operador, { onDelete: "SET NULL", hooks: true })
    declare operador: Operador

    @HasMany(() => DatosCheckList, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    declare checklists: DatosCheckList[]

    @ForeignKey(() => UsuariosChecklist)
    declare userId: number
    @BelongsTo(() => UsuariosChecklist)
    declare usuario: UsuariosChecklist
    
}

export default Asignacion