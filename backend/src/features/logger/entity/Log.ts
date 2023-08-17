import { Schema, model } from 'mongoose';
import type { LogReqDTO } from '../dto';


const LogSchema = new Schema<LogReqDTO>({
   ip: {
      type: Schema.Types.String,
      required: true,
   },
   type: {
      type: Schema.Types.String,
      required: true,
   },

}, { timestamps: true })

LogSchema.set("toJSON", {
   virtuals: true,
   versionKey:false,
});



export const LogEntity = model<LogReqDTO>('Log', LogSchema);


