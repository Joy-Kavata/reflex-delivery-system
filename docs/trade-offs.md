# Reflex — Trade-Off Log

## Purpose

The Reflex MVP prioritizes a simple and reliable delivery workflow over advanced logistics features.

The following trade-offs were intentionally accepted to keep the MVP focused, understandable and achievable within the sprint.

---

## Trade-Off 1: Manual Rider Assignment

### Decision

The dispatcher manually assigns each delivery to a rider.

### Why We Accepted It

Automatic assignment would require additional rules such as rider availability, location, workload and delivery distance.

For the MVP, manual assignment is simpler and keeps the dispatcher in control of the decision.

### Cost / Weakness

Manual assignment may become inefficient when the number of deliveries and riders increases.

### What We Would Do Differently

A future version could recommend or automatically assign riders based on availability, workload, location and delivery priority.

### Acceptable Because...

The MVP is focused on proving that a structured delivery workflow is better than coordinating assignments through scattered WhatsApp messages and phone calls.

---

## Trade-Off 2: No Live GPS Tracking

### Decision

The MVP tracks delivery status but does not provide continuous GPS tracking.

### Why We Accepted It

Live GPS requires additional location services, permissions, battery usage and infrastructure.

The core problem identified for the MVP is delivery visibility, not real-time geographic tracking.

### Cost / Weakness

The retailer cannot see the rider's exact location while the delivery is in progress.

### What We Would Do Differently

A future version could introduce optional GPS tracking for active deliveries, with appropriate privacy controls and battery considerations.

### Acceptable Because...

The status workflow already provides a simple form of operational visibility without adding the complexity of a full tracking system.

---

## Trade-Off 3: Simple Delivery Status Workflow

### Decision

The MVP uses a small number of delivery states:

**Requested → Assigned → Picked Up → Delivered**

### Why We Accepted It

A small number of clearly defined states makes the workflow easy for retailers, dispatchers and riders to understand.

### Cost / Weakness

The workflow does not capture more detailed situations such as:

- Rider unavailable
- Delivery delayed
- Customer unreachable
- Delivery failed
- Order cancelled
- Item returned

### What We Would Do Differently

We would introduce additional exception states and clear rules for handling failed or cancelled deliveries.

### Acceptable Because...

The MVP needs to validate the basic delivery lifecycle first rather than solving every possible delivery exception.

---

## Trade-Off 4: No Advanced Notifications

### Decision

The MVP does not depend on automated SMS, WhatsApp or push notifications for every status change.

### Why We Accepted It

Building and maintaining notification integrations adds external dependencies and additional implementation complexity.

The MVP can demonstrate the core workflow through the application itself.

### Cost / Weakness

Users may still need to open the application to check the latest status.

### What We Would Do Differently

A future version could provide configurable notifications for important events such as:

- Rider assignment
- Pickup
- Delivery completion
- Failed delivery

### Acceptable Because...

Notifications are useful enhancements, but they are not required to prove that centralized delivery records solve the visibility problem.

---

## Trade-Off 5: No Route Optimization

### Decision

Reflex does not calculate the most efficient delivery route in the MVP.

### Why We Accepted It

Route optimization would introduce mapping services, routing algorithms and additional product complexity.

### Cost / Weakness

Riders may not receive the most efficient route between multiple deliveries.

### What We Would Do Differently

A future version could integrate mapping and routing services to recommend efficient delivery sequences.

### Acceptable Because...

The MVP focuses on coordination and status visibility rather than optimizing transportation logistics.

---

## Summary

| Trade-Off | MVP Decision | Main Cost | Future Improvement |
|---|---|---|---|
| Rider assignment | Manual | Less efficient at scale | Smart/automatic assignment |
| GPS tracking | Not included | No exact rider location | Optional live tracking |
| Status workflow | Four core states | Limited exception handling | More delivery states |
| Notifications | Not required | Users may need to check the app | SMS/push notifications |
| Route optimization | Not included | Less efficient routing | Mapping and route optimization |

## Overall Product Principle

The trade-offs follow the **KISS (Keep It Simple, Stupid)** principle.

The MVP deliberately solves the most important problem first:

> **Create a shared, visible delivery workflow that reduces dependence on scattered WhatsApp messages and phone calls.**

Advanced logistics capabilities can be added after the core workflow has been validated.