export enum LogActionType {
	DELETE = "delete",
	UPDATE = "update",
	CREATE = "create",
}

export enum LogEntityType {
	ALBUM = "album",
	PICTURE = "picture",
}

export interface Log {
	id: number;
	action: LogActionType
	entity: LogEntityType
	entityId: number;
	userId: number;
	date: Date;
}