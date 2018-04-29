import { OnInit, NgZone, AfterViewInit, AfterContentChecked, AfterViewChecked, ElementRef, EventEmitter } from '@angular/core';
import 'fullcalendar';
import './lib/customEvent';
export declare class CalendarComponent implements OnInit, AfterViewInit, AfterContentChecked, AfterViewChecked {
    private element;
    private zone;
    private debug;
    private eventId;
    private eventIds;
    private _eventsModel;
    eventsModel: any[];
    eventsModelChange: EventEmitter<any>;
    options: any;
    eventDrop: EventEmitter<any>;
    eventResize: EventEmitter<any>;
    eventResizeStart: EventEmitter<any>;
    eventResizeStop: EventEmitter<any>;
    eventClick: EventEmitter<any>;
    clickButton: EventEmitter<any>;
    windowResize: EventEmitter<any>;
    viewRender: EventEmitter<any>;
    eventAfterRender: EventEmitter<any>;
    eventAfterAllRender: EventEmitter<any>;
    viewDestroy: EventEmitter<any>;
    eventRender: EventEmitter<any>;
    eventDestroy: EventEmitter<any>;
    eventMouseOver: EventEmitter<any>;
    eventMouseOut: EventEmitter<any>;
    initialized: EventEmitter<any>;
    select: EventEmitter<any>;
    unselect: EventEmitter<any>;
    dayClick: EventEmitter<any>;
    navLinkDayClick: EventEmitter<any>;
    navLinkWeekClick: EventEmitter<any>;
    eventDragStart: EventEmitter<any>;
    eventDragStop: EventEmitter<any>;
    drop: EventEmitter<any>;
    eventReceive: EventEmitter<any>;
    dayRender: EventEmitter<any>;
    resourceRender: EventEmitter<any>;
    constructor(element: ElementRef, zone: NgZone);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngAfterContentChecked(): void;
    ngAfterViewChecked(): void;
    updateEventsModel(event: any): void;
    addEventsModel(newEvent: any): void;
    removeEventsModel(deadEvent: any): void;
    updaterOptions(): void;
}
