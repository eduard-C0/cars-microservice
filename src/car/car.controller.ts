import { Controller } from '@nestjs/common';
import { CarService } from './car.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CarDto } from './car.dto';

@Controller()
export class CarController {
    constructor(private carService: CarService){}

    @MessagePattern("save_car")
    public async handlerCarSelling(@Payload() data: any){
        console.log(data)
        this.carService.saveCar(JSON.parse(data))
        return {
            message: "saved"
        }
    }

}
