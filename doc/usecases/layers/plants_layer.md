# Use Case: Plants Layer

## Summary

-   **Scope:** Plants Layer
-   **Level:** User Goal
-   **Actors:** App User
-   **Brief:** The user can add, edit, move and delete plant elements in their map in the plants layer to represent the plants and crops in their map and view the relationships between the plants through lines connecting them.
-   **Status:** Draft

## Scenarios

-   **Precondition:**
    The user has opened the app and has selected the plants layer.
-   **Main success scenario:**
    -   The user is able to add plants and is presented with a list of seasonal plants (for the selected time of the year), in following groups:
        -   available seeds with early expiration days first
        -   diversity constraints: suggestions which not-yet-used plants fit next to the plant just added, or at a place selected (spatial and temporal)
        -   which were recently planted
        -   and lastly favourites of users
    -   The user gets a visual indication which parts of the map are better suited for the plant to be placed (e.g. zones, pH value, moisture, animals or shadows).
    -   The user positions the plant element in the appropriate location in the map.
    -   When drawing an area of plants, the size of the arena and the number of plants is shown next to the mouse.
    -   The user is able to view the relationships between the plants by looking at the lines connecting them.
        The lines indicate the strength of the relationship.
    -   The user is able to move, edit (e.g. when planted, when harvested) and delete (either that it never existed or that it was removed from the garden) selected plants.
    -   The user adjusts the plant elements and their relationships as needed.
-   **Alternative scenario:**
    -   The user accidentally adds or moves a plant element in the wrong location and uses the app's undo function to correct the mistake.
-   **Error scenario:**
    -   The user attempts to add, move or edit a plant element but the app is experiencing technical difficulties and is unable to complete the request, displaying an error message.
    -   There is an error in the app's plant relationship indication and the lines connecting the plants are not displayed correctly. In this case, the app displays an error message.
-   **Postcondition:**
    The user's map includes the added, edited, moved or deleted plant element as desired.
-   **Non-functional Constraints:**
    -   Performance
    -   Partial offline availability
