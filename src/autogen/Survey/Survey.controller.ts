
import { Controller, Body } from "@nestjs/common";
import { Crud, CrudController, Override, ParsedRequest, CrudRequest, ParsedBody, CreateManyDto } from '@nestjsx/crud';
import { ApiTags, ApiResponse, ApiOperation, ApiBody } from '@nestjs/swagger';
import {Survey, SurveyCreate, SurveyUpdate} from './dtos/Survey.dto'
import {SurveyService} from './Survey.service';
  
@Crud({
    model: {
        type: Survey    },
    dto: {
        create: SurveyCreate,
        update: SurveyUpdate,
        replace: SurveyUpdate,
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
                                                                            questions: { eager: false },
                                                                                                analytics: { eager: false },
                                                                        "questions.responses": { eager: false },
                            },
             }
})

@Controller('Surveys')
@ApiTags('Surveys')
export class SurveyController implements CrudController<Survey>{
    constructor(public service: SurveyService) {}

        
    get base(): CrudController<Survey> {
        return this;
    }

    @Override('getManyBase')
    @ApiOperation({ summary: 'Retrieve multiple Surveys' })
    getMany(
        @ParsedRequest() req: CrudRequest,
    ) {
        return this.base.getManyBase(req);
    }

    @Override('getOneBase')
    @ApiOperation({ summary: 'Retrieve a single Survey' })
    get(
        @ParsedRequest() req: CrudRequest,
    ) {
        return this.base.getOneBase(req);
    }

    @Override('createOneBase')
    @ApiOperation({ summary: 'Create a single Survey' })
        @ApiBody({
        type: SurveyCreate ,
        description: "The Description for the Post Body. Please look into the DTO. You will see the @ApiOptionalProperty used to define the Schema.",
        
    })
    create(
        @ParsedRequest() req: CrudRequest,
        @Body() dto: SurveyCreate,
    ) {
        return this.base.createOneBase(req, dto as unknown as Survey);
    }

    @Override('createManyBase')
    @ApiOperation({ summary: 'Create multipleSurveys' })
    createMany(
        @ParsedRequest() req: CrudRequest,
        @Body() dto: CreateManyDto<SurveyCreate>
    ) {
        return this.base.createManyBase(req, dto as unknown as CreateManyDto<Survey>);
    }

    @Override('updateOneBase')
    @ApiOperation({ summary: 'Update a single Survey' })
    update(
        @ParsedRequest() req: CrudRequest,
        @Body() dto: SurveyUpdate,
    ) {
        return this.base.updateOneBase(req, dto as unknown as Survey);
    }

    @Override('replaceOneBase')
    @ApiOperation({ summary: 'Replace a single Survey' })
    replace(
        @ParsedRequest() req: CrudRequest,
        @Body() dto: SurveyUpdate,
    ) {
        return this.base.replaceOneBase(req, dto as unknown as Survey);
    }

    @Override('deleteOneBase')
    @ApiOperation({ summary: 'Delete a single Survey' })
    delete(
        @ParsedRequest() req: CrudRequest,
    ) {
        return this.base.deleteOneBase(req);
    }
}
  