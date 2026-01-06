
import { Controller, Body } from "@nestjs/common";
import { Crud, CrudController, Override, ParsedRequest, CrudRequest, ParsedBody, CreateManyDto } from '@nestjsx/crud';
import { ApiTags, ApiResponse, ApiOperation, ApiBody } from '@nestjs/swagger';
import {Response, ResponseCreate, ResponseUpdate} from './dtos/Response.dto'
import {ResponseService} from './Response.service';
  
@Crud({
    model: {
        type: Response    },
    dto: {
        create: ResponseCreate,
        update: ResponseUpdate,
        replace: ResponseUpdate,
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
                                                                            question: { eager: false },
                                                                        "question.survey": { eager: false },
"question.survey.analytics": { eager: false },
                            },
             }
})

@Controller('Responses')
@ApiTags('Responses')
export class ResponseController implements CrudController<Response>{
    constructor(public service: ResponseService) {}

        
    get base(): CrudController<Response> {
        return this;
    }

    @Override('getManyBase')
    @ApiOperation({ summary: 'Retrieve multiple Responses' })
    getMany(
        @ParsedRequest() req: CrudRequest,
    ) {
        return this.base.getManyBase(req);
    }

    @Override('getOneBase')
    @ApiOperation({ summary: 'Retrieve a single Response' })
    get(
        @ParsedRequest() req: CrudRequest,
    ) {
        return this.base.getOneBase(req);
    }

    @Override('createOneBase')
    @ApiOperation({ summary: 'Create a single Response' })
        @ApiBody({
        type: ResponseCreate ,
        description: "The Description for the Post Body. Please look into the DTO. You will see the @ApiOptionalProperty used to define the Schema.",
        
    })
    create(
        @ParsedRequest() req: CrudRequest,
        @Body() dto: ResponseCreate,
    ) {
        return this.base.createOneBase(req, dto as unknown as Response);
    }

    @Override('createManyBase')
    @ApiOperation({ summary: 'Create multipleResponses' })
    createMany(
        @ParsedRequest() req: CrudRequest,
        @Body() dto: CreateManyDto<ResponseCreate>
    ) {
        return this.base.createManyBase(req, dto as unknown as CreateManyDto<Response>);
    }

    @Override('updateOneBase')
    @ApiOperation({ summary: 'Update a single Response' })
    update(
        @ParsedRequest() req: CrudRequest,
        @Body() dto: ResponseUpdate,
    ) {
        return this.base.updateOneBase(req, dto as unknown as Response);
    }

    @Override('replaceOneBase')
    @ApiOperation({ summary: 'Replace a single Response' })
    replace(
        @ParsedRequest() req: CrudRequest,
        @Body() dto: ResponseUpdate,
    ) {
        return this.base.replaceOneBase(req, dto as unknown as Response);
    }

    @Override('deleteOneBase')
    @ApiOperation({ summary: 'Delete a single Response' })
    delete(
        @ParsedRequest() req: CrudRequest,
    ) {
        return this.base.deleteOneBase(req);
    }
}
  