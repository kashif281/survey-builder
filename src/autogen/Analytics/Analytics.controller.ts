
import { Controller, Body } from "@nestjs/common";
import { Crud, CrudController, Override, ParsedRequest, CrudRequest, ParsedBody, CreateManyDto } from '@nestjsx/crud';
import { ApiTags, ApiResponse, ApiOperation, ApiBody } from '@nestjs/swagger';
import {Analytics, AnalyticsCreate, AnalyticsUpdate} from './dtos/Analytics.dto'
import {AnalyticsService} from './Analytics.service';
  
@Crud({
    model: {
        type: Analytics    },
    dto: {
        create: AnalyticsCreate,
        update: AnalyticsUpdate,
        replace: AnalyticsUpdate,
    },
    validation: false,
    params: {
        id: {
            field: 'id',
            type: 'string',
            primary: true,
        },
    },
    query: {
        /**
        * commenting out limit and pagination because of an issue with Crud lib: https://github.com/nestjsx/crud/issues/777
        */
        // TODO: make limit env driven?
        limit: 5,
        alwaysPaginate: true,
                    join: {
                                                                            survey: { eager: false },
                                                                        "survey.questions": { eager: false },
"survey.questions.responses": { eager: false },
                            },
             }
})

@Controller('Analytics')
@ApiTags('Analytics')
export class AnalyticsController implements CrudController<Analytics>{
    constructor(public service: AnalyticsService) {}

        
    get base(): CrudController<Analytics> {
        return this;
    }

    @Override('getManyBase')
    @ApiOperation({ summary: 'Retrieve multiple Analytics' })
    getMany(
        @ParsedRequest() req: CrudRequest,
    ) {
        return this.base.getManyBase(req);
    }

    @Override('getOneBase')
    @ApiOperation({ summary: 'Retrieve a single Analytics' })
    get(
        @ParsedRequest() req: CrudRequest,
    ) {
        return this.base.getOneBase(req);
    }

    @Override('createOneBase')
    @ApiOperation({ summary: 'Create a single Analytics' })
        @ApiBody({
        type: AnalyticsCreate ,
        description: "The Description for the Post Body. Please look into the DTO. You will see the @ApiOptionalProperty used to define the Schema.",
        
    })
    create(
        @ParsedRequest() req: CrudRequest,
        @Body() dto: AnalyticsCreate,
    ) {
        return this.base.createOneBase(req, dto as unknown as Analytics);
    }

    @Override('createManyBase')
    @ApiOperation({ summary: 'Create multipleAnalytics' })
    createMany(
        @ParsedRequest() req: CrudRequest,
        @Body() dto: CreateManyDto<AnalyticsCreate>
    ) {
        return this.base.createManyBase(req, dto as unknown as CreateManyDto<Analytics>);
    }

    @Override('updateOneBase')
    @ApiOperation({ summary: 'Update a single Analytics' })
    update(
        @ParsedRequest() req: CrudRequest,
        @Body() dto: AnalyticsUpdate,
    ) {
        return this.base.updateOneBase(req, dto as unknown as Analytics);
    }

    @Override('replaceOneBase')
    @ApiOperation({ summary: 'Replace a single Analytics' })
    replace(
        @ParsedRequest() req: CrudRequest,
        @Body() dto: AnalyticsUpdate,
    ) {
        return this.base.replaceOneBase(req, dto as unknown as Analytics);
    }

    @Override('deleteOneBase')
    @ApiOperation({ summary: 'Delete a single Analytics' })
    delete(
        @ParsedRequest() req: CrudRequest,
    ) {
        return this.base.deleteOneBase(req);
    }
}
  