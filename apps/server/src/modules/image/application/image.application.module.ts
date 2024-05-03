import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { ImageDomainModule } from '../domain'
import { ImageController } from './image.controller'

import { PropertyDomainModule } from '../../../modules/property/domain'

import { ImageByPropertyController } from './imageByProperty.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    ImageDomainModule,

    PropertyDomainModule,
  ],
  controllers: [ImageController, ImageByPropertyController],
  providers: [],
})
export class ImageApplicationModule {}
