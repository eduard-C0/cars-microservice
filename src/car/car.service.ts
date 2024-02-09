import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CarDto } from './car.dto';

@Injectable()
export class CarService {
    constructor(private prisma: PrismaService) {}

    async saveCar(carDto: CarDto){
        const newCar = await this.prisma.car.create({
            data: {
                    manufacturing_date: new Date("2000-01-17 11:00:00"),
                    price: carDto.price,
                    description: carDto.description,
                    sold: false,
                    image: carDto.imageURL,
                    userId: 1,
                    type: carDto.type,
                }})
        console.log('Created user:', newCar)
    }
}