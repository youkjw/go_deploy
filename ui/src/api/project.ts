import ajax, { Result } from './ajax'

export interface Project {
    id: string;
    name: string;
    desc: string;
    depository_id: string;
    dockerfile: string;
    compose_yaml: string;
    file_config?: {
        name: string;
        value: string;
    }[];
    status: string,
    createdAt: string;
    updatedAt: string;
}

export interface SearchArgs {
    name?: string;
    pageIndex: number;
    pageSize: number;
}

export interface SearchResult {
    items: Project[];
    total: number;
}

export interface FindResult {
    item: Project;
}

export interface ProjectDepository{
    depository_id: number,
    name: string,
}

export interface SearchDepositoryResult {
    items: ProjectDepository[];
    total: number;
}

export class ProjectyApi {
    find(id: string) {
        return ajax.get<FindResult>('/project/find', { id })
    }

    search(args: SearchArgs) {
        return ajax.get<SearchResult>('/project/search', args)
    }

    save(c: Project) {
        return ajax.post<Result<Object>>('/project/save', c)
    }

    delete(id: string) {
        return ajax.post<Result<Object>>('/project/delete', { id })
    }

    deploy(id: string) {
        return ajax.post<Result<Object>>('/project/deploy', { id })
    }

    search_depository(page?:number,size?:number, name?:string) {
        return ajax.get<SearchDepositoryResult>('/project/search_depository', { page, size, name })
    }
}

export default new ProjectyApi
